import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Diases {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    Name?:string 

    @Column()
    Species?:string

    @Column()
    definition?:string

    @Column()
    symptom?:string

    @Column()
    treatment?:string
    
    @Column()
    isContagious?:boolean

    @Column()
    medicines?:string
}
