import express from "express";
import { Snippet } from "../db/model";
import {
  createSnippet,
  deleteSnippet,
  getSnippet,
  updateSnippet,
} from "../controllers/snippetControllers";

const snippetRoutes = express.Router();

snippetRoutes.post("/", createSnippet);
snippetRoutes.get("/:key", getSnippet);
snippetRoutes.put("/:key", updateSnippet);
snippetRoutes.delete("/:key", deleteSnippet);

export default snippetRoutes;
