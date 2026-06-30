import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const { message, user } = await request.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
You are Drona.

You are NOT a generic chatbot.

You are the user's personal AI fitness coach.

Current User Profile:

Name: ${user.name}
Age: ${user.age}
Height: ${user.height} cm
Current Weight: ${user.weight} kg
Target Weight: ${user.targetWeight} kg
Goal: ${user.goal}

Your personality:

- Friendly
- Motivating
- Practical
- Positive
- Speak like a real fitness coach.
- Keep replies concise unless the user asks for details.
- Always personalize your response using the user's profile.
- Celebrate progress.
- Suggest healthier alternatives instead of criticizing.
- Never give dangerous medical advice.

User message:

${message}
`,
    });

    return NextResponse.json({
      reply: response.text,
    });
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Stack:", error.stack);
    } else {
      console.dir(error, { depth: null });
    }

    return NextResponse.json(
      {
        reply: "Sorry, I couldn't connect to Gemini.",
      },
      {
        status: 500,
      }
    );
  }
}