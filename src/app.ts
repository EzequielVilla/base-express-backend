import express from "express";
import cors from "cors";
import morgan from "morgan";
import V1Router from "./routes/index";
import { initDatabase } from "./lib/db/connect";

const app = express();
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use("/api/v1", V1Router);

initDatabase();
app.listen(process.env.PORT || 3080, () => {
  console.log(`server is running on port ${process.env.PORT || 3080}`);
});
