import express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import userRoute from "./routes/userRoute.js";
import entryRoute from "./routes/entryRoute.js"
import AppError from "./utils/appError.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB connection is successful")
}).catch(err => {
    console.log("Can't connect to the MongoDB!")
    console.log(err)
});
//middlewares
app.use(express.json())
app.use(morgan("common"));


app.use("/biri", userRoute);
app.use("/entry", entryRoute);

app.all("*", (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});