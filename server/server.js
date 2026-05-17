import dotenv from "dotenv";
import app from "./src/app.js";
import { connectToDb } from "./src/config/db.js";
dotenv.config();

connectToDb();

const PORT = process.env.PORT || 3000;
console.log(process.env.PORT);

app.listen(PORT, () => {
  console.log("server is running..");
});
