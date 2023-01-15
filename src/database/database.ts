import mongoose from "mongoose";

const url = "mongodb://localhost:27017/store";

export const connect = async () => {
  await mongoose.connect(url, {});
};
