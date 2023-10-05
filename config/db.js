const mongoose=require("mongoose");
const colors=require("colors");

// const connectDB=async()=>{
//     try{
//         await mongoose.connect("mongodb://localhost:27017/doctorapp")
//         console.log(`mongodb connected ${mongoose.connection.host}`.bgGreen.white)
//     }catch(error){
//         console.log(`mongodb server issue at ${error}`.bgRed.white)
//     }
// }

mongoose.connect('mongodb://127.0.0.1:27017/doctorapp')
  .then(() => {
    console.log('Connected!'.bgWhite.cyan);
  })
  .catch((err)=>{
    console.log(err+" ".bgRed);
  })

module.exports=mongoose;