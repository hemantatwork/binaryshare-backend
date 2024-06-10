import { Schema, model } from "mongoose";
import { ISnippet } from "./interface";

const snippetSchema = new Schema<ISnippet>({
  snippet: { type: String, required: true },
});

export const Snippet = model<ISnippet>("snippets", snippetSchema);
