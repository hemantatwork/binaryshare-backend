import { Request, Response } from "express";
import { Snippet } from "../db/model";

export async function createSnippet(req: Request, res: Response) {
  console.log(" req.body => ", req.body);
  const snippet = new Snippet({
    snippet: req.body.snippet,
    snippet_type: req.body.snippet_type,
    expiry_time: req.body.expiry_time,
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
}

export async function getSnippet(req: Request, res: Response) {
  try {
    const data = await Snippet.findById(req.params.key);
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong with fetching snippet" });
  }
}

export async function updateSnippet(req: Request, res: Response) {
  try {
    const id = req.params.key;
    const updatedData = req.body;
    const options = { new: true };
    console.log("id => ", id);
    console.log("updatedData => ", updatedData);

    const result = await Snippet.findByIdAndUpdate(id, updatedData, options);
    console.log("result", result);
    res.send(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong with update snippet" });
  }
}

export async function deleteSnippet(req: Request, res: Response) {
  try {
    const id = req.params.key;
    const data = await Snippet.findByIdAndDelete(id);
    if (!data) {
      res.send(`Snippet not found to delete or has been already deleted.`);
    }
    res.send(`Snippet with ${data?._id} has been deleted..`);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong with delete snippet" });
  }
}
