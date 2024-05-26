import { DataSource } from "typeorm";

class DatabaseConnect {
    private static instance: DatabaseConnect;
    private connection: DataSource;

    private constructor() {
        this.connection = new DataSource({
            type: "postgres",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || "5432"),
            username: process.env.DB_USER,
            password: "12345",
            database: process.env.DB_NAME,
        });
    }

    public static async getInstance(): Promise<DatabaseConnect> {
        if (!DatabaseConnect.instance) {
            DatabaseConnect.instance = new DatabaseConnect();
            await DatabaseConnect.instance.initializeConnection();
        }

        return DatabaseConnect.instance;
    }

    private async initializeConnection(): Promise<void> {
        try {
            await this.connection.initialize();
            console.log("Data Source has been initialized!");
        } catch (err) {
            console.error("Error during Data Source initialization", err);
        }
    }

    public getConnection(): DataSource {
        return this.connection;
    }
}

export default DatabaseConnect;
