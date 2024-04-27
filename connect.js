const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Myecommerce")
.then(()=>{
    console.log("Connection succesful");
}).catch((err)=>{
    console.log(`No connection ${err}`)
})

const signupsch = new mongoose.Schema({

  
    email: {
        type: String,
        required: false,
        unique: false, // Email should be unique
        trim: true
    },
    password: {
        type: String,
        required: false,
        trim: true
    },
    phone:{
        type: Number,
        required:false,
        trim:true

    }
    })
const data = mongoose.model("Users", signupsch);
module.exports = data;