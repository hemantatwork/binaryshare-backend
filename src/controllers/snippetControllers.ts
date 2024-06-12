import { Request, Response } from "express";
import { Snippet } from "../db/model";

export async function createSnippet(req: Request, res: Response) {
  const snippet = new Snippet({
    snippet: req.body.snippet,
    snippet_type: req.body.snippet_type,
    expiry_time: req.body.expiry_time,
  });
  try {
    const data = await snippet.save();
    res.send({
      success: true,
      data: data,
      message: "Snippet created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while saving snippet",
    });
  }
}

export async function getSnippet(req: Request, res: Response) {
  try {
    const data = await Snippet.findById(req.params.key);
    if (data === null) {
      return res.json({
        success: true,
        message: "No snippet found.",
      });
    }
    res.json({
      success: true,
      data: data,
      message: "Snippet fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching snippet",
    });
  }
}

export async function updateSnippet(req: Request, res: Response) {
  try {
    const id = req.params.key;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Snippet.findByIdAndUpdate(id, updatedData, options);

    res.send({
      success: true,
      data: result,
      message: "snippet updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong with update snippet",
    });
  }
}

export async function deleteSnippet(req: Request, res: Response) {
  try {
    const id = req.params.key;
    const data = await Snippet.findByIdAndDelete(id);
    if (!data) {
      res.send({
        success: true,
        message: `Snippet not found to delete or has been already deleted`,
      });
    }
    res.send({
      success: true,
      message: `Snippet with ${data?._id} has been deleted..`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong with delete snippet",
    });
  }
}
