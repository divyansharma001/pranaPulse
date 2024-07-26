import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function chatController(req, res) {
  try {
    const { userInput, conversationHistory } = req.body;

    if (!userInput) {
      return res.status(400).json({ error: "User input is required" });
    }

    const history = Array.isArray(conversationHistory)
      ? conversationHistory
      : [];

    const messages = [
      {
        role: "system",
        content:
          "You are a yoga expert chatbot. Ask the user about their health problem, then ask relevant follow-up questions. Finally, recommend personalized yoga poses based on their answers. Give response short and in easy words use bullet points wherever possible and write on new lines when sentences are completed",
      },
      ...history,
      {
        role: "user",
        content: userInput,
      },
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: messages,
      model: "llama3-8b-8192",
    });

    const aiResponse = chatCompletion.choices[0]?.message?.content || "";

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chat controller:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
