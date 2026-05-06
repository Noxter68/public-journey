import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { waitlistSchema } from "@/lib/waitlist";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = waitlistSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email, projectName, projectStage, twitterHandle, projectDescription, hypeScore } = parsed.data;

    const referrer = req.headers.get("referer") ?? undefined;
    const { searchParams } = new URL(req.url);

    const entry = await prisma.waitlistEntry.create({
      data: {
        email,
        projectName,
        projectStage: projectStage as "idea" | "building" | "private_beta" | "public_beta" | "launched",
        twitterHandle: twitterHandle || null,
        projectDescription: projectDescription || null,
        hypeScore: hypeScore ?? null,
        source: "landing",
        referrer: referrer ?? null,
        utmSource: searchParams.get("utm_source") ?? null,
        utmMedium: searchParams.get("utm_medium") ?? null,
        utmCampaign: searchParams.get("utm_campaign") ?? null,
      },
    });

    return NextResponse.json({ success: true, id: entry.id }, { status: 201 });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code: string }).code === "P2002"
    ) {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }
    console.error("Waitlist error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
