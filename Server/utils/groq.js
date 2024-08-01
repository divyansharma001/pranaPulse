import Groq from "groq-sdk";

const groq = new Groq({apiKey: process.env.GROQ_API_KEY});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a yoga expert chatbot. Ask the user about their health problem, then ask relevant follow-up questions. Finally, recommend personalized yoga poses based on their answers.",
      },
      {
        role: "user",
        content: "I have stress and I am suffering from stress from past 6 months this is getting bad and bad I need some cure. Recommend personalised yoga for this.",
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();