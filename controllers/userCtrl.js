const userModel=require('../models/userModels');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
//register callback
const registerController=async(req,res)=>{
    try{
        const existingUser=await userModel.findOne({email:req.body.email});
        if(existingUser){
            return res.status(200).send({message: 'User Already exist',success:false});
        }
        const password=req.body.password;
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        req.body.password=hashedPassword;
        const newUser=new userModel(req.body);
        await newUser.save();
        res.status(201).send({message: 'register successfull',success: true})
    }catch(error){
        console.log(error);
        res.status(500).send({success:false,message:`register controller ${error.message}`})
    }
}

// login callback 

const loginController= async(req,res)=>{
    try{
        const user=await userModel.findOne({email:req.body.email});
        if(!user){
            return res.status(500).send({message:'user not found',success:false});

        }
        const isMatch=await bcrypt.compare(req.body.password, user);
        if(!isMatch){
            return res.status(200).send({message:'Invalid Email or Password',success:false});
        }
        const token=jwt.sign({iid:user._id},process.env.JWT_SECRET,{expiresIn:'id'});
        res.status(200).send({message:'Login Success',success:true,token});
 

    }catch(err){
        console.log(err);
        res.status(500).send({message:`Error in Login CTRL ${error.message}`})
    }
}

module.exports={loginController,registerController};