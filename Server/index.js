import Groq from "groq-sdk";

const groq = new Groq({ apiKey: "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"});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Explain the importance of fast language models",
      },
    ],
    model: "llama3-8b-8192",
  });
}

main();