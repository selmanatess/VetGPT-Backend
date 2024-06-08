// import { Router,Request,Response } from "express";
// import natural from 'natural';
// import fs from 'fs';




// export async function LocalApi(request: Request, response: Response){
  
// const string1 = request.body.message;

// let maxSimilarity=-1;
// let mostSimilarIndex=-1;



// const __dirname='C:\\Users\\selma\\Desktop\\VetGPT\\vetgpt\\backendTypescript\\src'



// fs.readFile(__dirname +'/data/diases1.json','utf-8', (err, data) => {
    
//     const veri = JSON.parse(data.toString());


// type qaPairType = { question: string, answer: string,vet:string,farm:string };
// const qaPairs: qaPairType[] = veri.qa_pairs;

// qaPairs.forEach((pair: qaPairType, index: number) => {
//     const similarity = natural.JaroWinklerDistance(string1, pair.question);
//     if (similarity > maxSimilarity) {
//         maxSimilarity = similarity;
//         mostSimilarIndex = index;
//     }
// });

// if (mostSimilarIndex !== -1) {
//   let score: number = Math.round(maxSimilarity * 100) ;
// response.status(200).send({  question:qaPairs[mostSimilarIndex].question, answer:qaPairs[mostSimilarIndex].answer,vet:qaPairs[mostSimilarIndex].vet,farm:qaPairs[mostSimilarIndex].farm ,score:score});
  
//   } else {
//     console.log('Benzer soru bulunamadı.');
//   }
// }
// );




// }