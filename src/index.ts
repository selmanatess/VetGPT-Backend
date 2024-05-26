import * as dotenv from 'dotenv';
import path from 'path';
import DatabaseConnect from './Database/DatabaseConnect';

dotenv.config({ path: path.join('C:\\Users\\selma\\Desktop\\VetGPT\\vetgpt\\backendTypescript', 'dev.env') }
);



class App {
    private static instance: App;
    private database: DatabaseConnect;

    private constructor() {
        this.database = await DatabaseConnect.getInstance(); // Await the promise to resolve before assigning to this.database
    }

    public static async getInstance(): Promise<App> {
        if (!App.instance) {
            App.instance = new App();
        }

        return App.instance;
    }

    public async start(): Promise<void> {
        console.log("App is starting...");
        await this.database;
        console.log("App has started!");
    }
}
 const app = App.getInstance();