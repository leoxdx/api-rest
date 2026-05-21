import { Request, Response } from "express"
import { AppError } from "../utils/app-error"
import { z } from "zod"


class ProductsController {
    index(request: Request, response: Response) {
        const { page, limit } = request.query
        response.send(`Pagina ${page} de ${limit}`)
    }

    create(request: Request, response: Response) {

        const bodySchema = z.object({
            name: z.string()
            .trim()
            .min(6, "Minimo 6 caracteres!")
            .max(100),
            price: z.number().positive("Valor do produto nao pode ser menor do que zero!")
        })

        const { name, price } = bodySchema.parse(request.body)

        // if(!name){
        //     throw new AppError("Nome do produto eh obrigatorio!")
        // }

        // if(name.trim().length > 6){
        //     throw new AppError("Minimo 6 caracteres!")
        // }

        // if(price < 0){
        //     throw new AppError("Valor do produto nao pode ser menor do que zero!")
        // }

        // if(!price){
        //     throw new AppError("Valor do produto eh obrigatorio!")
        // }

        response.status(201).json({ name, price, user_id: request.user_id })
    }
}

export { ProductsController }