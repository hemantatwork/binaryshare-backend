import express from "express";
import { User } from "../db/model";

const snippetRoutes = express.Router();

snippetRoutes.post("/snippet", async (req, res) => {
  const user = new User({
    name: "Kevin Heart",
    age: 86,
    theguydata: "somtext",
  });
  const data = await user.save();
  console.log("data => ", data);
  res.send("check snippet");
});

export default snippetRoutes;
