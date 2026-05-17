import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://127.0.0.1:5500",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  }),
);

app.use(express.static(path.join(__dirname, "../public")));

// Routes

import authRouter from "./routes/auth.routes.js";
app.use("/api/auth", authRouter);

import router from "./routes/song.routes.js";
app.use("/api/songs", router);

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

export default app;
