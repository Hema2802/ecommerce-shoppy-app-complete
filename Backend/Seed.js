
// seed- means to insert bulk stuff at once - insertMany([])

import ProductsModel from "./Models/Products.model.js"

// array

const dummyArr=[
    {
        "product_name":"Men Grey, Blue Sandals",
        "imageUrl":"https://rukminim3.flixcart.com/image/1042/971/xif0q/shopsy-sandal/y/d/l/8-sp-p-11-grey-8-orvax-grey-original-imagp3452jsz28uw.jpeg?q=60&crop=false",
        "description":"Good and nice product.Strong balt in sandals",
        "price":"250 INR",
        "ratings":3,
        "category":"FootWear",
        "stock":10
    },
    {
        "product_name":"FABULOUS WOMEN HANDBAGS",
        "imageUrl":"https://rukminim3.flixcart.com/image/1042/971/kzrbiq80/shopsy-hand-messenger-bag/1/y/q/fabulous-women-handbags-blt-hobo-khatushyam-collection-women-original-imagbp6y6gxq45v8.jpeg?q=60&crop=false",
        "description":"Elegant and versatile women's handbag crafted for everyday style and convenience",
        "price":"1500 INR",
        "ratings":5,
        "category":"HandBags",
        "stock":30
    },
    {
        "product_name":"Wooden Wall Hanging",
        "imageUrl":"https://rukminim3.flixcart.com/image/1042/971/xif0q/shopsy-wall-decoration/d/b/k/walnut-finish-wooden-square-wall-hanging-planter-stand-4-squre-original-imahy975sapwkwyz.jpeg?q=60&crop=false",
        "description":"Pot Stand Set of 4 Piece Decorative Wooden Wall Hanging for Home Decor Office (Brown, Black)",
        "price":"100 INR",
        "ratings":4.2,
        "category":"Home Decor",
        "stock":12
    },
    {
        "product_name":"Bhimshankar Fashion",
        "imageUrl":"https://rukminim3.flixcart.com/image/1042/971/xif0q/shopsy-kids-dress/q/v/k/2-3-years-spw-bhimshankar-fashion-original-imah7m3yr6c522yd.jpeg?q=60&crop=false",
        "description":"Baby Girls Party Dress (White, Sleeveless)",
        "price":"3200 INR",
        "ratings":4.5,
        "category":"Kids-wear",
        "stock":150
    }
]


// insertMany
export async function seedDB(){
    await ProductsModel.insertMany(dummyArr);
    console.log("DB seeded")
}