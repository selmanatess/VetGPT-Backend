import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response,NextFunction } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { Users } from "./Entity/User"
import * as dotenv from "dotenv"
import { Diases } from "./Entity/Diases"

dotenv.config();

console.log(process.env.POSTGRES_URL+"sdadasdsa");

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
  
    

    // register express routes from defined application routes
    Routes.forEach(route => {
        route.router.forEach(subRoute => {
            (app as any)[subRoute.method](
                `${route.route}${subRoute.route}`,
                (req: Request, res: Response, next: NextFunction) => {
                         const result = (new (subRoute.controller as any)())[subRoute.action](req, res, next);
                    if (result instanceof Promise) {
                        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
                    } else if (result !== null && result !== undefined) {
                        res.json(result);
                    }
                }
            );
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(8080)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(Users, {
            firstName: "Selman ATEŞ",
            lastName: "Saw",
            email: "selmanates007@gmail.com",
            password: "12345",
            signDate: new Date()
        })
    )
await AppDataSource.manager.save(
        AppDataSource.manager.create(Diases, {
            Name: "Covid-19",
            Species: "Virus",
            definition: "Covid-19 is a disease caused by a new strain of coronavirus. 'CO' stands for corona, 'VI' for virus, 'D' for disease, and 19 for the year it emerged.",
            symptom: "Fever, cough, shortness of breath, fatigue, body aches, loss of taste or smell, sore throat, nausea, vomiting, diarrhea, nasal congestion, runny nose, headache, muscle pain, chills, confusion, dizziness, loss of appetite, conjunctivitis, and skin rash.",
            treatment: "There is no specific treatment for COVID-19, but many of the symptoms can be treated. Treatment is based on the patient's symptoms. Supportive care is provided to help relieve symptoms. For severe cases, treatment includes care to support vital organ functions.",
            isContagious: true,
            medicines: "Remdesivir, Dexamethasone, Tocilizumab, Ivermectin, Hydroxychloroquine, Azithromycin, Lopinavir, Ritonavir, Favipiravir, Baricitinib, Anakinra, Colchicine, Convalescent plasma, Monoclonal antibodies"
        })
    )
    // await AppDataSource.manager.save(
    //     AppDataSource.manager.create(Users, {
    //         firstName: "Phantom",
    //         lastName: "Assassin",
    //         age: 24,
    //         isActive: false
        
    //     })
    // )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
