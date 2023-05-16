const mongoose = require("mongoose");

const plateSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        // required: true
    },
     plateType: {
         type: String,
        //  required: true
     },
     plateStyle: {
         type: String,
        //  required: true
     },
     plate: {
         type: String,
        //  required: true
     },
     frontPlateSize: {
         type: String,
        //  required: true
     },
     rearPlateSize: {
         type: String,
        //  required: true
     },
     plateBorder: {
         type: String,
        //  required: true
     },
     slogan: {
         type: String,
        //  required: true
     },
    //  deliveryTime: {
    //      type: String,
    // //      required: true
    //  }
    
})

const Register = new mongoose.model("Register", plateSchema)
module.exports = Register