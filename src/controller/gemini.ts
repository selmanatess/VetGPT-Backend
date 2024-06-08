import {GoogleGenerativeAI,HarmBlockThreshold,HarmCategory} from '@google/generative-ai'
import {Request, Response} from 'express'



export async function Gemini(request: Request, response: Response){

    const MODEL_NAME = "gemini-pro";
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];


  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "Kendini bir veteriner olarak düşün. Senin adın VetGPT. Ben sana hayvanım hakkında belli şeyler sorucam Sen de o anda neler yapabileceğim şeylerden bahsedeceksin bana. Aşağı yukarı bir hastalık tanısı koyup hangi ilaçları almam gerektiğini ve neler yapmam gerektiğini söyleyeceksin. Ve soruları sanki birden fazla veterinerle tartışıp sonucu sen söylüyormuşsun gibi ve normal bir insanın anlayacağı şekilde cevap ver"}],
      },
      {
        role: "model",
        parts: [{ text: "Merhaba! Ben VetGPT. Sana yardımcı olmaktan mutluluk duyarım. Hayvanın hakkında bana biraz bilgi verir misin?"}],
      },
    ],
  });
  const result = await chat.sendMessage(request.body.message);
  const result1 = result.response.candidates![0].content.parts[0];
response.status(200).send(result1);
}