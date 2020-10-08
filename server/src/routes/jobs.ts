import express from "express";
import { JobSchema } from "../models/job";

const jobsRouter = express.Router();

jobsRouter.get("/getJobs", async (req, res) => {
  const jobs = await JobSchema.find();
  res.send(jobs);
});

jobsRouter.post("/createJob", async (req, res) => {
  const job = new JobSchema({
    title: req.body.title,
    description: req.body.description,
  });
  await job.save();
  res.send(job);
});

jobsRouter.get("/jobs/:id", async (req, res) => {
  try {
    const job = await JobSchema.findOne({ _id: req.params.id });
    res.send(job);
  } catch {
    res.status(404);
    res.send({ error: "Job doesn't exist!" });
  }
});

export { jobsRouter };
