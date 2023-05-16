const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mern123:mern123@devconnector.dhmyu.mongodb.net/project").then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log(`no connection`);
})