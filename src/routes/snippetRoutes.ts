import express from "express";
import { Snippet } from "../db/model";

const snippetRoutes = express.Router();

snippetRoutes.post("/", async (req, res) => {
  const snippet = new Snippet({
    snippet: req.body.snippet,
  });
  try {
    const data = await snippet.save();
    console.log("data => ", data);
    res.send(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong while saving snippet" });
  }
});

snippetRoutes.get("/:key", async (req, res) => {
  try {
    const data = await Snippet.findById(req.params.key);
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong with fetching snippet" });
  }
});

export default snippetRoutes;
