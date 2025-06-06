import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { EventType, EventCode } from "@/lib/generated/prisma";

type EventCodeInput = {
  id: string;
  eventType: string;
  statutoryCode: string;
  contractCode: string;
  temporaryCode: string;
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const organizationId = searchParams.get("organizationId");

    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization ID is required" },
        { status: 400 }
      );
    }

    // Get all event types
    const eventTypes = await prisma.eventType.findMany({
      orderBy: {
        label: "asc",
      },
    });

    // Get event codes for the organization
    const eventCodes = await prisma.eventCode.findMany({
      where: {
        organization_id: organizationId,
      },
      include: {
        event_type: true,
      },
    });

    // Format the response
    const formattedCodes = eventTypes.map((eventType: EventType) => {
      const statutoryCode = eventCodes.find(
        (code: EventCode) =>
          code.event_type_id === eventType.id &&
          code.contract_type === "EFETIVO"
      );
      const contractCode = eventCodes.find(
        (code: EventCode) =>
          code.event_type_id === eventType.id &&
          code.contract_type === "COMISSIONADO"
      );
      const temporaryCode = eventCodes.find(
        (code: EventCode) =>
          code.event_type_id === eventType.id &&
          code.contract_type === "TEMPORARIO"
      );

      return {
        id: eventType.id,
        eventTypeId: eventType.id,
        eventType: eventType.label,
        statutoryCode: statutoryCode?.code?.toString() || "",
        contractCode: contractCode?.code?.toString() || "",
        temporaryCode: temporaryCode?.code?.toString() || "",
      };
    });

    return NextResponse.json(formattedCodes);
  } catch (error) {
    console.error("Error fetching event codes:", error);
    return NextResponse.json(
      { error: "Failed to fetch event codes" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { organizationId, eventCodes } = body;

    console.log("Received request:", { organizationId, eventCodes }); // Debug log

    if (!organizationId || !eventCodes) {
      return NextResponse.json(
        { error: "Organization ID and event codes are required" },
        { status: 400 }
      );
    }

    // Process each event code in sequence to avoid race conditions
    for (const eventCode of eventCodes) {
      console.log("Processing event code:", eventCode); // Debug log

      // Handle statutory code
      if (eventCode.statutoryCode !== "") {
        console.log("Upserting statutory code:", {
          eventTypeId: eventCode.eventTypeId,
          code: eventCode.statutoryCode,
        });

        await prisma.eventCode.upsert({
          where: {
            organization_id_event_type_id_contract_type: {
              organization_id: organizationId,
              event_type_id: eventCode.eventTypeId,
              contract_type: "EFETIVO",
            },
          },
          update: {
            code: parseInt(eventCode.statutoryCode),
          },
          create: {
            organization_id: organizationId,
            event_type_id: eventCode.eventTypeId,
            contract_type: "EFETIVO",
            code: parseInt(eventCode.statutoryCode),
          },
        });
      }

      // Handle contract code
      if (eventCode.contractCode !== "") {
        console.log("Upserting contract code:", {
          eventTypeId: eventCode.eventTypeId,
          code: eventCode.contractCode,
        });

        await prisma.eventCode.upsert({
          where: {
            organization_id_event_type_id_contract_type: {
              organization_id: organizationId,
              event_type_id: eventCode.eventTypeId,
              contract_type: "COMISSIONADO",
            },
          },
          update: {
            code: parseInt(eventCode.contractCode),
          },
          create: {
            organization_id: organizationId,
            event_type_id: eventCode.eventTypeId,
            contract_type: "COMISSIONADO",
            code: parseInt(eventCode.contractCode),
          },
        });
      }

      // Handle temporary code
      if (eventCode.temporaryCode !== "") {
        console.log("Upserting temporary code:", {
          eventTypeId: eventCode.eventTypeId,
          code: eventCode.temporaryCode,
        });

        await prisma.eventCode.upsert({
          where: {
            organization_id_event_type_id_contract_type: {
              organization_id: organizationId,
              event_type_id: eventCode.eventTypeId,
              contract_type: "TEMPORARIO",
            },
          },
          update: {
            code: parseInt(eventCode.temporaryCode),
          },
          create: {
            organization_id: organizationId,
            event_type_id: eventCode.eventTypeId,
            contract_type: "TEMPORARIO",
            code: parseInt(eventCode.temporaryCode),
          },
        });
      }
    }

    // After all updates are complete, fetch the updated codes
    const updatedCodes = await prisma.eventCode.findMany({
      where: {
        organization_id: organizationId,
      },
      include: {
        event_type: true,
      },
    });

    console.log("Updated codes:", updatedCodes); // Debug log

    return NextResponse.json({
      success: true,
      updatedCodes,
    });
  } catch (error) {
    console.error("Error saving event codes:", error);
    return NextResponse.json(
      { error: "Failed to save event codes" },
      { status: 500 }
    );
  }
}
