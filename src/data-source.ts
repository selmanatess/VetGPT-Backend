
import { DataSource } from "typeorm"


export const AppDataSource = new DataSource({

    
    type: "postgres",
    url: process.env.POSTGRES_URL,
  
    synchronize: true,
    logging: false,
    entities: [__dirname + '\\Entity\\*.ts'],
    migrations: [],
    subscribers: [],
})
