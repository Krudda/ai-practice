import OpenAI from "openai";
const openai = new OpenAI();

export async function apiRequest({ userQuestion, context }: { userQuestion: string, context: string }) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                "role": "developer",
                "content": [
                    {
                        "type": "text",
                        "text": context
                    }
                ]
            },
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": userQuestion
                    }
                ]
            }
        ]
    });
    return completion.choices[0].message;
}