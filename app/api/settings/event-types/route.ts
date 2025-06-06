import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, label, description } = body;

    // Validate required fields
    if (!name || !label) {
      return NextResponse.json(
        { error: "Nome e rótulo são obrigatórios" },
        { status: 400 }
      );
    }

    // Convert name to snake_case
    const snakeCaseName = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/(^_|_$)/g, "");

    // Check if event type already exists
    const existingEventType = await prisma.eventType.findUnique({
      where: { name: snakeCaseName },
    });

    if (existingEventType) {
      return NextResponse.json(
        { error: "Tipo de evento já existe" },
        { status: 400 }
      );
    }

    // Create new event type
    const eventType = await prisma.eventType.create({
      data: {
        name: snakeCaseName,
        label,
        description,
      },
    });

    // Get all event types after creation
    const allEventTypes = await prisma.eventType.findMany({
      orderBy: {
        label: "asc",
      },
    });

    return NextResponse.json({
      created: eventType,
      allTypes: allEventTypes,
    });
  } catch (error) {
    console.error("Erro ao criar tipo de evento:", error);
    return NextResponse.json(
      { error: "Falha ao criar tipo de evento" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, label, description } = body;

    // Validate required fields
    if (!id || !label) {
      return NextResponse.json(
        { error: "ID and label are required" },
        { status: 400 }
      );
    }

    // Check if event type exists
    const existingEventType = await prisma.eventType.findUnique({
      where: { id },
    });

    if (!existingEventType) {
      return NextResponse.json(
        { error: "Event type not found" },
        { status: 404 }
      );
    }

    // Update event type
    const eventType = await prisma.eventType.update({
      where: { id },
      data: {
        label,
        description,
      },
    });

    return NextResponse.json(eventType);
  } catch (error) {
    console.error("Error updating event type:", error);
    return NextResponse.json(
      { error: "Failed to update event type" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const eventTypes = await prisma.eventType.findMany({
      orderBy: {
        label: "asc",
      },
    });

    return NextResponse.json(eventTypes);
  } catch (error) {
    console.error("Error fetching event types:", error);
    return NextResponse.json(
      { error: "Failed to fetch event types" },
      { status: 500 }
    );
  }
}
