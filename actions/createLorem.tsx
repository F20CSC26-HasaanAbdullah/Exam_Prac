"use server";

import { formSchema } from "@/components/form";
import db from "@/lib/db"
import { z } from "zod"

export const CreateLorem = async (values: z.infer<typeof formSchema>) => {

    console.log(values)

    const createlorem1 = await db.lorem.create(
        {
            data: {
                name: values.name,
            }
        }
    )
    console.log(createlorem1)
}
export const DeleteLorem = async (id: string) => {

    const deletelorem1 = await db.lorem.delete(
        {
            where: {
                id: id,
            }
        }
    )
    console.log(deletelorem1)
}

export const GetLorem = async () => {

    return await db.lorem.findMany()


} 