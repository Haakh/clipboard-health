import express from "express";
import mongoose from "mongoose";
import { jobsRouter } from "./routes/jobs";

const app = express();

// Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", jobsRouter);

    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
