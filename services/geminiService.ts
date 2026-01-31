
import { GoogleGenAI } from "@google/genai";

export const getCreativeVision = async (projectName: string, description: string) => {
  try {
    // Initializing GoogleGenAI inside the function to ensure the most current API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `As a world-class creative director, provide a short, punchy, and cinematic "Director's Vision" (2-3 sentences) for a project called "${projectName}" described as: ${description}. Focus on the visual mood and emotional impact.`,
      config: {
        temperature: 0.8,
        thinkingConfig: { thinkingBudget: 0 }
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The vision is to transcend standard narratives through surgical precision in editing and a soul-stirring visual aesthetic.";
  }
};
