import slugify from "slugify";
import productModel from "../model/productModel.js"
import fs from "fs"

export const productController = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shippping } = req.fields;
        const { photo } = req.files

        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" })
            case !slug:
                return res.status(500).send({ error: "slug is Required" })
            case !description:
                return res.status(500).send({ error: "description is Required" })
            case !price:
                return res.status(500).send({ error: "price is Required" })
            case !category:
                return res.status(500).send({ error: "category is Required" })
            case !quantity:
                return res.status(500).send({ error: "quantity is Required" })
            case !shippping:
                return res.status(500).send({ error: "shippping is Required" })
            case photo && photo.size > 10000:
                return res.status(500).send({ error: "photo is Required less than 1mb" })
        }

        const products = new productModel({ ...req.fields, slug: slugify(name) })

        if (photo) {
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }

        await products.save()

        res.status(201).send({
            success: true,
            message: "Products Created Successfully" ,
             products
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: "Error in creating product"
        })
    }
}
 