"use server"

import { createCarSchema } from "@/schemas/create-car"
import { addCar } from "@/services/car";
import { fitImage } from "@/utils/fit-image";
import { redirect } from "next/navigation";

export const createCar = async (formData: FormData) => {
    const data = createCarSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        author_name: formData.get('author_name'),
        author_email: formData.get('author_email'),
        negotiable: formData.get('negotiable') === "on",
        price_from: formData.get('price_from'),
        price_to: formData.get('price_to'),
        img: formData.get('img')
    });

    if (data.success) {
        const imgName = await fitImage(data.data.img);
        const newCar = await addCar({ ...data.data, imgName });
        console.log(newCar.id);
    } else {
        console.log(data.error.flatten().fieldErrors)
    }

    redirect('/');
}