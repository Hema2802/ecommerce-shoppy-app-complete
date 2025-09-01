import { addToCart, deleteCartItem, updateCart } from "../Controller/Cart.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


export function cartRoutes(app){
    app.post("/api/cart",verifyToken, addToCart);
    app.put("/api/cart",verifyToken,updateCart);
    app.delete("/api/cart/:productId",verifyToken,deleteCartItem)
}