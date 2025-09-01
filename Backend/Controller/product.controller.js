import ProductsModel from "../Models/Products.model.js";


// 1) to create a new product data
export async function createProductData(req,res){

    try{
        // destructure process
        let {product_name,imageUrl,ratings,price,category,description,stock} = req.body;
        let newProduct = await ProductsModel.create({product_name,imageUrl,ratings,price,category,description,stock});
// if successfully created a product
        return res.status(201).json({"New product is created":newProduct});
    }
    // facing any error means
    catch(err){
        return res.status(404).json({err:"Something went wrong while try to create new product ⚠️"})
    }
    
}


// 2) to fetch products data from DB

export async function fetchProductList(req,res){
    try{
        let data=await ProductsModel.find();
        // if there is no product details in DB
        if(!data){
            return res.status(500).json({message:"No product's data is found in dataBase🚧"})
        }

        return res.status(201).json(data);


    }
    // common error handling 
    catch(err){
       return res.status(500).json({err:"Something went wrong while try to fetch products list from DB ⚠️"})
    }
}


// 3) Update product details

export async function updateProductData(req,res){
    // try and catch method
     try{
    //    find id of the product
        const _id= req.params.id;
        //  update
        let updatedData = await ProductsModel.findByIdAndUpdate( _id, req.body,{new:true});
        // if there is no product to update in DB
        if(!updatedData){
            return res.status(404).json({message:"No product's data is found in dataBase🚧"})
        }

        return res.status(201).json({"Updated data":updatedData})
     } 
    //  common error 
     catch(err){
        return res.status(500).json({err:"Something went wrong while try to update product's data list from DB ⚠️"})
     }
    
}

// 4)delete the product

export async function deleteProduct(req,res){
    // try and catch method
     try{
    //    find id of the product
        const _id= req.params.id;
        //  delete
        let deletedData = await ProductsModel.findByIdAndDelete( _id);
        // if there is no product to delete in DB
        if(!deletedData){
            return res.status(404).json({message:"No product's data is found in dataBase🚧"})
        }

        return res.status(201).json({"Deleted Successfully":deletedData})
     } 
    //  common error 
     catch(err){
        return res.status(500).json({err:"Something went wrong while try to delete product's data from DB ⚠️"})
     }
    
}