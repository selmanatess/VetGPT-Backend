// // Import express, cors, helmet and morgan
// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import { ChatGbtApi } from '../controller/chat'; // Import ChatGbtApi function from chat.ts
// import { Gemini } from '../controller/gemini';
// import { LocalApi } from '../controller/local'; // Import LocalApi function from local.ts


// //single class Aprouter 
//  export class AppRouter {
//     private static instance: AppRouter;
 
  
//     private constructor() {
//       const app = express(); // New express instance
//       const port = process.env.PORT; // Port number

//       // Express configuration
//       app.use(cors()); // Enable CORS
//       app.use(helmet()); // Enable Helmet
//       app.use(morgan('dev')); // Enable Morgan
//       app.use(bodyParser.json()); // Enable JSON body parser
//       app.use(bodyParser.urlencoded({ extended: true })); // Enable URL-encoded body parser
//       app.listen(port, () => {
//         // Callback function when server is successfully started
//         console.log(`Server started at http://localhost:${port}`);
//       });
   
//       // Use routes
//       app.post('/chat', ChatGbtApi); // Chat route
//       app.post('/gemini', Gemini); // Chat route
//       app.post('/local', LocalApi); // Local route
    

//     }
//     public static getInstance(): AppRouter {
//         if (!AppRouter.instance) {
//             AppRouter.instance = new AppRouter();
//         }
//         return AppRouter.instance;
//     }
//     public async start(): Promise<void> {
//         console.log("App is starting...");
//         console.log("App has started!");
//     }
// }
