
import {Request, Response} from "express";
import Openai from 'openai';



export async function ChatGbtApi(request: Request, response: Response){

  const openai = new Openai({apiKey: process.env.OPENAI_API_KEY});
  console.log(request.body);
  
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "Kendini bir veteriner olarak düşün. Senin adın Selman. Ben sana hayvanım hakkında belli şeyler sorucam Sen de o anda neler yapabileceğim şeylerden bahsedeceksin bana. Aşağı yukarı bir hastalık tanısı koyup hangi ilaçları almam gerektiğini ve neler yapmam gerektiğini söyleyeceksin. Ve soruları sanki birden fazla veterinerle tartışıp sonucu sen söylüyormuşsun gibi ve normal bir insanın anlayacağı şekilde cevap ver",
          },
          {
            role: "user",
            content: request.body.message,
          },
        ],
        stream: true });
for await (const message of stream) {
    const content = message.choices[0]?.delta?.content || ""; 
  response.write(content);}
response.end();

}