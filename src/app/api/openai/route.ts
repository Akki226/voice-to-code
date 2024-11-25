import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(req: Request) {
    try {
        const { transcript } = await req.json();

        if (!transcript) {
            return NextResponse.json({ error: "Transcript is required" }, { status: 400 });
        }

        // Using the chat model and the correct endpoint for chat-based completion
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a code generator that generates React component-based code for simple SPAs without any context." },
                { role: "user", content: transcript },
            ],
            max_tokens: 100,
            temperature: 0.5,
        });
        console.log(response.choices)

        // Ensure choices is not null or empty before accessing
        if (response.choices && response.choices.length > 0) {
            const generatedCode = response.choices?.[0]?.message?.content?.trim() ?? "No code generated";
            return NextResponse.json({ code: generatedCode });
        } else {
            return NextResponse.json({ error: "No choices found in the response" }, { status: 500 });
        }
    } catch (error) {
        console.error("Error generating code:", error);
        return NextResponse.json({ error: "Failed to generate code" }, { status: 500 });
    }
}
