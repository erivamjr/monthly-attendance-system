import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PDFMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

// Configure PDFMake fonts
(PDFMake as any).vfs = pdfFonts.pdfMake.vfs;

// GET /api/export/pdf - Generate PDF for a frequency sheet
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const sheetId = searchParams.get("sheetId");

    if (!sheetId) {
      return NextResponse.json(
        { error: "ID da folha é obrigatório" },
        { status: 400 }
      );
    }

    // Get the sheet with all related data
    const sheet = await prisma.frequencySheet.findUnique({
      where: { id: sheetId },
      include: {
        organization: true,
        unit: true,
        submitter: true,
        entries: {
          include: {
            employee: true,
          },
          orderBy: {
            employee: {
              name: "asc",
            },
          },
        },
      },
    });

    if (!sheet) {
      return NextResponse.json(
        { error: "Folha de frequência não encontrada" },
        { status: 404 }
      );
    }

    // For non-master users, ensure they can only view sheets in their organization
    if (
      session.user.role !== "MASTER" &&
      sheet.organization_id !== session.user.organizationId
    ) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
    }

    // For coordinators, ensure they can only view sheets for their unit
    if (session.user.role === "COORDINATOR") {
      const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { unit_id: true },
      });

      if (!user?.unit_id || user.unit_id !== sheet.unit_id) {
        return NextResponse.json({ error: "Acesso negado" }, { status: 403 });
      }
    }

    // Generate PDF document definition
    const docDefinition = {
      content: [
        {
          text: sheet.organization.name,
          style: "header",
          alignment: "center",
        },
        {
          text: "FOLHA DE FREQUÊNCIA",
          style: "subheader",
          alignment: "center",
          margin: [0, 10],
        },
        {
          columns: [
            {
              text: [{ text: "Unidade: ", bold: true }, sheet.unit.name],
            },
            {
              text: [
                { text: "Mês/Ano: ", bold: true },
                `${sheet.month}/${sheet.year}`,
              ],
              alignment: "right",
            },
          ],
          margin: [0, 20],
        },
        {
          table: {
            headerRows: 1,
            widths: ["*", "auto", "auto", "auto", "auto", "auto", "auto"],
            body: [
              [
                { text: "Servidor", style: "tableHeader" },
                { text: "Faltas", style: "tableHeader", alignment: "center" },
                { text: "Ad. Not.", style: "tableHeader", alignment: "center" },
                { text: "HE 50%", style: "tableHeader", alignment: "center" },
                { text: "HE 100%", style: "tableHeader", alignment: "center" },
                { text: "Plantão", style: "tableHeader", alignment: "center" },
                { text: "Férias", style: "tableHeader", alignment: "center" },
              ],
              ...sheet.entries.map((entry) => [
                {
                  text: [
                    { text: entry.employee.name + "\n", bold: true },
                    {
                      text: `Matrícula: ${
                        entry.employee.registration || "N/A"
                      }`,
                      fontSize: 8,
                    },
                  ],
                },
                { text: entry.absence_days || "0", alignment: "center" },
                {
                  text: entry.additional_night_hours || "0",
                  alignment: "center",
                },
                { text: entry.overtime_50_hours || "0", alignment: "center" },
                { text: entry.overtime_100_hours || "0", alignment: "center" },
                { text: entry.on_call_hours || "0", alignment: "center" },
                { text: entry.vacation_days || "0", alignment: "center" },
              ]),
            ],
          },
          layout: "lightHorizontalLines",
        },
        {
          columns: [
            {
              text: [
                { text: "\nStatus: ", bold: true },
                sheet.status === "DRAFT"
                  ? "RASCUNHO"
                  : sheet.status === "SUBMITTED"
                  ? "ENVIADA"
                  : sheet.status === "APPROVED"
                  ? "APROVADA"
                  : "REJEITADA",
              ],
              margin: [0, 20],
            },
            {
              text: sheet.submitted_at
                ? [
                    { text: "\nEnviada em: ", bold: true },
                    new Date(sheet.submitted_at).toLocaleDateString("pt-BR"),
                  ]
                : "",
              margin: [0, 20],
            },
          ],
        },
        {
          text: [
            { text: "\nResponsável: ", bold: true },
            sheet.submitter?.name || "Não enviada",
          ],
          margin: [0, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableHeader: {
          bold: true,
          fontSize: 10,
          fillColor: "#eeeeee",
        },
      },
      defaultStyle: {
        fontSize: 10,
      },
    };

    // Generate PDF buffer
    const pdfDoc = PDFMake.createPdf(docDefinition);
    const pdfBuffer = await new Promise<Buffer>((resolve) => {
      pdfDoc.getBuffer((buffer: Buffer) => {
        resolve(buffer);
      });
    });

    // Log the export
    await prisma.log.create({
      data: {
        organization_id: sheet.organization_id,
        user_id: session.user.id,
        action: "EXPORT_PDF",
        details: { sheet_id: sheet.id },
      },
    });

    // Return PDF buffer with appropriate headers
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="frequency-sheet-${sheet.month}-${sheet.year}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    return NextResponse.json({ error: "Erro ao gerar PDF" }, { status: 500 });
  }
}
