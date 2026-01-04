import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "itssensai", // Unique app ID
  name: "Sensai", // App name
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
