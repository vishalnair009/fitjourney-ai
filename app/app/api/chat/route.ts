import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message } = await request.json();

  return NextResponse.json({
    reply: `Drona received: "${message}". OpenAI will be connected next.`,
  });
}