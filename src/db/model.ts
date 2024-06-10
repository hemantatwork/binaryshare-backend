import { Schema, model } from "mongoose";
import { ISnippet } from "./interface";

const snippetSchema = new Schema<ISnippet>({
  snippet: { type: String, required: true },
  snippet_type: { type: String, required: true },
  expiry_time: { type: Date, required: true },
});

export const Snippet = model<ISnippet>("snippets", snippetSchema);
