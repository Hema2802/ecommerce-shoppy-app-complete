import { createProductData, deleteProduct, fetchProductList, updateProductData } from "../Controller/product.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

export function prodRoutes(app){
     app.post("/api/product",verifyToken,createProductData);
     app.get("/api/products",fetchProductList);
     app.put("/api/product/:id", updateProductData);
     app.delete("/api/product/:id",deleteProduct);
}