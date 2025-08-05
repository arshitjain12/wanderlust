const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL =  "mongodb://localhost:27017/wanderlust";
main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err); 
 });

 async function main() {
    await mongoose.connect(MONGO_URL);
};
//    initData object  h 
const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:"68875145efcdf9c83c3dad8a"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();



