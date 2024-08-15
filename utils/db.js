import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://shovon:nwXHh1yt5Gj4fj7P@store-cluster.o7kflav.mongodb.net/booking-media?retryWrites=true&w=majority`).then(() => {
    console.log(`Connected to database`);
}).catch((err)=>{
    console.log(err , "Could not connect to the database.");
});