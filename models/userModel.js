const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const addressSchema=new Schema({
    city:String,
    street:String,
    houseNum:Number
})
const userSchema=new Schema({
    id:Number,
    name:String,
    password:{type:String,min:3,max:20},
    addresses:[addressSchema]
});

userSchema.virtual('userOrders',{
    ref:'order',
    localField:'_id',
    foreignField:'user'
})
userSchema.set('toJSON',{virtuals:true})


module.exports=mongoose.model('user',userSchema);

