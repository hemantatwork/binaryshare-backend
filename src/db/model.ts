import mongoose, { Schema, model } from "mongoose";

interface IUser {
  name: string;
  age: number;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  avatar: String,
});

export const User = model<IUser>("User", userSchema);
