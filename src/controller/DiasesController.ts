
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

import { Diases } from "../Entity/Diases"

export class DiasesController {

    private DiasesRepository = AppDataSource.getRepository(Diases)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.DiasesRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.DiasesRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { Name,Species,definition,symptom,treatment,isContagious,medicines } = request.body;

        const user = Object.assign(new Diases(), {
            Name,
            Species,
            definition,
            symptom,
            treatment,
            isContagious,
             medicines
        })

        return this.DiasesRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.DiasesRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.DiasesRepository.remove(userToRemove)

        return "user has been removed"
    }

}