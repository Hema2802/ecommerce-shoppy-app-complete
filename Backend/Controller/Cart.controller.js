
import CartModel from "../Models/Cart.model.js";
import ProductsModel from "../Models/Products.model.js";

// 1)post a new cart item

export async function addToCart(req,res){
       const userId = req.user._id; 
       const { productId, quantity } = req.body;

       try{
           let cart = await CartModel.findOne({ user: userId });

           if (!cart) {
      // Create new cart
           cart = new CartModel({
               user: userId,
               items: [{ product: productId, quantity }],
           });
     } else{
        // Check if product already in cart
      const itemIndex = cart.items.findIndex(
        (item) => item.product.toString() === productId
      );

        if (itemIndex > -1) {
    //     // Update quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // Add new product to cart
        cart.items.push({ product: productId, quantity });
      }}
    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
    }
    
    catch(err){
           res.status(500).json({ message: "Error adding to cart"});
       }

    };



    // 2)PUT method

export async function updateCart(req, res) {
  const userId = req.user._id;
//   give req in body
  const { productId, quantity } = req.body;
// try and catch method
  try {
    const cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );
// if the product not in that cart
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not in cart" });
    }

    cart.items[itemIndex].quantity = quantity;

    await cart.save();
    // if successfully run 
    res.status(200).json({ message: "Cart updated", cart });
  } 
//   common error 
  catch (err) {
    // console.error("Update cart error:", err);
    res.status(500).json({ message: "Error updating cart", error: err.message });
  }
}


//  DELETE/cart/

export async function deleteCartItem(req,res){
  const userId = req.user._id;
  const { productId } = req.params; 
//   try and catch method
  try {
    const cart = await CartModel.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );
    // save the  cart
    await cart.save();
    // successfully removed
    res.status(200).json({ message: "Item removed from cart ✅"});
  } catch (err) {
    // common catch error
    res.status(500).json({ message: "Error removing item"});
  }
}


