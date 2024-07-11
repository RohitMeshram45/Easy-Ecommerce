import categoryModel from "../model/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async () => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(401).send({ message: "Name is required " })
        }
        const existingCategory = await categoryModel.findOne({ name })

        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "Category Already Exisits"
            })
        }

        const category = await new categoryModel({ name, slug: slugify(name).save() })

        res.status(200).send({
            success: true,
            message: "new category created",
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            error,
            message: "Error in Category "
        })
    }
}

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        const category = await categoryModel.findByIdAndUpdate(
            id, { name, slug: slugify(name) },
            { new: true }
        )
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: error,
            error,
            message: "Error while updateing cetory"

        })
    }
}

export const categoryController= async (req,res)=>{
    try {
        const category = await categoryModel.find({})
        
        res.status(200).send({
            success:true,
            message:"All Cetegory List",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while all category"
        })
    }
}

// single category controller 

export const singleCategoryController = async(req,res)=>{

    try {
        const {slug}= req.params;
        const category = await categoryModel.findOne({slug:req.params.slug})

        res.status(200).send({
            success:true,
            message:"get single Cetegory Successfully"
            ,
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting Songle Category"
        })
    }
}

 export const delecategoryController=async (req,res)=>{
    try {
        const {id}=req.params;

        const deleteCategory = await categoryModel.deleteOne({id})
        res.status(200).send({
            success:true,
            message:"Delete category successfully",
            deleteCategory
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting delete a Category"
        })
    }
 }
