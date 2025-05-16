import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        try {

            const { prompt } = await req.json();

            // handling the prompt failing to be sent correctly
            if (!prompt) return new Response("Missing prompt", { status: 400 });

            const response = await openai.responses.create({
                model: 'gpt-4o',
                instructions: 'You are a coding assistant proficient in Google Analytics 4 tracking codes',
                input: prompt,
            });

            return new Response(
                JSON.stringify({ text: response.output_text }), { status: 200, headers: { "Content-Type": "application/json" } }
            )


        } catch (error: any) {
            return new Response(JSON.stringify({ error: error.message }), { status: error.status })
        }
    } else {
        NextResponse.json({ error: "Method not allowed" }, { status: 405 })
    }
}