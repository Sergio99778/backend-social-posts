import express from "express";
import { config } from "../config";
import { userRouter } from "./components/user/network";

const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTING
app.use("/api/user", userRouter);

app.listen(config.api.port, () => {
  console.log(`Server is running on port ${config.api.port}`);
});
0;
