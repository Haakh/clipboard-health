import mongoose from "mongoose";

const schema = mongoose.Schema({
  jobTitle: String,
  description: String,
  salaryStart: String,
  salaryEnd: String,
  jobForm: String,
  currency: String,
  location: String,
  shiftHours: String,
  shiftSchedule: String,
  jobType: String,
  ratio: String,
  degreeRequirement: String,
  workExperience: String,
});

const JobSchema = mongoose.model("Post", schema);
export { JobSchema };
