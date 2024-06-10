import express from "express";
import snippetRoutes from "./routes/snippetRoutes";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
dotenv.config({ path: ".env" });

const app = express();
// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT ? process.env.PORT : 5000;

// database
mongoose.connect(process.env.MONGO_URL as string);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use("/", snippetRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
