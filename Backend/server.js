
// importing dependencies needed files

import express from "express"
import mongoose from "mongoose"
import { prodRoutes } from "./Routes/Product.route.js";
import { seedDB } from "./Seed.js";
import { userRoutes } from "./Routes/User.routes.js";
import { cartRoutes } from "./Routes/Cart.routes.js";

const app=express();

// DataBase connection 

 mongoose.connect("mongodb://localhost:27017")

 const db = mongoose.connection;

db.on("open",()=>{
    // if the connection is successful
    console.log("DB is connected 🟢")
})
db.on("error",()=>{
    // if not connected 
    console.log("DB connection Failed 🔴")
})

// body parsing middleware
app.use(express.json())


// middleware
app.use((req,res,next)=>{
    console.log("Middleware is connected");
    next();
});

function requestLogger(req, res, next) {
  const start = Date.now();

  // Wait for the response to finish
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });

  next(); // Pass control to the next middleware or route handler
}

// Database replaced with array-user data

app.use(requestLogger);


// basic route defining

app.get('/',(req,res)=>{
    res.send("Welcome you all to root route 📢");
})

// routes defining
prodRoutes(app); //product routes
seedDB()  // for insert large data
userRoutes(app);  // for authentication
cartRoutes(app);  // cart routes


// create a server
const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`🚨 Server is running on ${PORT}`)
})