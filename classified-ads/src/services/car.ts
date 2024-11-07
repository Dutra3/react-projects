import { prisma } from "@/utils/prisma"

type Params = {
    title: string,
    description?: string,
    author_name: string,
    author_email: string,
    negotiable: boolean,
    price_from: string,
    price_to: string,
    imgName: string 
}

export const addCar = async (data: Params) => {
    const newCar = await prisma.car.create({
        data: {
            title: data.title,
            description: data.description,
            authorName: data.author_name,
            authorEmail: data.author_email,
            negotiable: data.negotiable,
            priceFrom: parseFloat(data.price_from),
            priceTo: parseFloat(data.price_to),
            img: data.imgName,
        }
    });

    return newCar;
}