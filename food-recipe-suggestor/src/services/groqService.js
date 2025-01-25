import Groq from "groq-sdk";

const groq = new Groq({ apiKey: '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' , dangerouslyAllowBrowser: true });

export async function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    model: "gemma2-9b-it",
  });
}