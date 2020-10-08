import mongoose from "mongoose";

const schema = mongoose.Schema({
  title: String,
  description: String,
});

const JobSchema = mongoose.model("Post", schema);
export { JobSchema };
