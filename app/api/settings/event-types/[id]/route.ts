import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params?.id) {
    return NextResponse.json(
      { error: "Event type ID is required" },
      { status: 400 }
    );
  }

  try {
    const id = params.id;
    const eventType = await prisma.eventType.findUnique({
      where: { id },
    });

    if (!eventType) {
      return NextResponse.json(
        { error: "Event type not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(eventType);
  } catch (error) {
    console.error("Error fetching event type:", error);
    return NextResponse.json(
      { error: "Failed to fetch event type" },
      { status: 500 }
    );
  }
}
