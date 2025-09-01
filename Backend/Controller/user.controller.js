// imported part

import userModel from "../Models/User.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// for registerthe user if anyone newly visit my shoppy app
export function registerUser(req,res){
    // defining req body 
        const {fullName,email,password}=req.body;
        // find email already exist or not
        userModel.findOne({email})
        .then((data)=>{
            if(data){
                return res.status(400).json({message:"The Email is already exist in DB."})
            }

            const newUser = new userModel({
                fullName,
                email,
                // hashing the password using bcrypt
                password: bcrypt.hashSync(password, 10)
            })

            newUser.save()
            .then((data)=>{
                return res.status(201).json({"Successfully Registered":data});
            })
            .catch((err)=>{
                return res.status(500).json({err:"Error while trying to register"});
            })
        })

}


// for login the user who registered already

export function loginUser(req,res){
    const {email,password}=req.body;
        // find email already exist or not
        userModel.findOne({email})
        .then((data)=>{
            // if user data not register 
            if(!data){
                return res.status(404).json({message:"The Email is not registered yet! Kindly go and register!"})
            }

           let validPassword=bcrypt.compareSync(password ,data.password);
        //   password checking
           if(!validPassword){
            return res.status(403).json({message:"Incorrect Password!"})
           }
        //    token for accessing data
           let token = jwt.sign({ id: data._id}, "secretKey", { expiresIn: '60m' });
           console.log(token)
           res.status(201).send({
            user:{
                email:data.email,
                // password:data.password,
                fullName:data.fullName
            },
            accessToken:token,
           })
        })
        // common error 
        .catch((err)=>{
            return res.status(303).send({message:"Somthing went wrong while trying to login!"})
        })
}