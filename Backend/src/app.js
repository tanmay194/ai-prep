const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectToDB = require("./config/database.js"); 

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://ai-prep1.vercel.app", "http://localhost:5173"],
    credentials: true,
  }),
);

// 🔥 The Fix: Middleware to ensure DB connection is ready BEFORE running any route logic
app.use(async (req, res, next) => {
  try {
    await connectToDB();
    next();
  } catch (err) {
    res.status(500).json({ error: "Failed to connect to database" });
  }
});

const authRouter = require("./routes/auth.routes.js");
const interviewRouter = require("./routes/interview.routes.js");

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;