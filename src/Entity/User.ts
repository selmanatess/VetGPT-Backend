import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    firstName?:string 

    @Column()
    lastName?:string

    @Column()
    signDate?:Date

    @Column()
    email?:string

    @Column()
    password?:string
    
}
