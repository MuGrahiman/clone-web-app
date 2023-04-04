const mongoose = require("mongoose");

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB connection successful");
}).catch((error) =>{
    console.log("DB not connected");
})      