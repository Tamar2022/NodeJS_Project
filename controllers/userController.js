const { ObjectId } = require('mongodb');
 const db=require('../db/db.js');
// const userModel = require('../models/userModel');
const User=require('../models/userModel');


module.exports.get= async function(req,res){
  let users=await User.find();
   res.send(`hi ${users}`);//???
}
module.exports.getByDetails= async function(req,res){
    const userName=req.params.userName;
    const password=req.params.password;

    const user1= await  User.findOne({name:userName,password:password});
    
    if(user1){
        user1.password="";
        res.send(user1);

    }
    else
    console.log(err);
}
module.exports.getOrders= async function(req,res){
    const id=req.params.id;
try
{
    const user1= await  User.findOne().populate({path:'userOrders',select:'date sum items'});
    
   res.status(200).json({success:true,user1});
    
}
catch(err)
   {
   res.status(400).json({success:false,message:err.message});
}}
module.exports.postUser=async function(req,res){
    if(!req.body)
      return res.status(400);
    const {name, password, addresses}=req.body;
    const user1=new User({
        name,
        password,
       
        addresses
    });
   let user2= await  user1.save();
if(user2)
     res.send(user2._id);
else
{
    return res.status(404).json({
        message: 'No such user'
    });
}   
}
module.exports.putUser=async function(req,res,next){
    const id = req.params.id;
        try{
            const user= await User.findById(ObjectId(id))
                if(!user)
                {
                    throw new Error("not found")
                }
                user.name = req.body.name ? req.body.name : user.name;
                user.password = req.body.password ? req.body.password : user.password;
                user.addresses = req.body.addresses ? req.body.addresses : user.addresses;
                
                user.save();
                res.send(`hi ${user} name : ${user.name} put`);
        }
        catch(err)
        {
            next(err)
        }
    
    }
    // const {name, password, email,addresses}=req.body
    // const user1=new User({
    //     name:name,
    //     password:password,
    //     email:email,
    //     addresses:addresses
    // })
    
    // const id=req.params.id
    // // let user2=await User.findOne( {_id:id});
    // user1.id=id;
    // user1.save();
    // res.send(`hi ${user1} name : ${user1.name} put`);


module.exports.delete=async function(req,res){
    
    let user1=await  User.findByIdAndRemove(req.params.id);
    if(!user1)
    console.log("not found");
    else
    res.send(`bye ${req.params.id}  `);


}


