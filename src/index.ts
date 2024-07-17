import express from "express";
import cors from "cors";
import V1Router from "./routes/index";

const app = express();
app.use(cors());

app.use("/api/v1", V1Router);

app.listen(process.env.PORT || 3080, () => {
  console.log(`server is running on port ${process.env.PORT || 3080}`);
});
