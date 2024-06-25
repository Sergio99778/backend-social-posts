import { Request, Response, Router } from "express";
import { success } from "../../../network/response";
import { listUsers } from "./controller";

export const userRouter = Router();

userRouter.get("/", function (req: Request, res: Response) {
  const users = listUsers();
  success(req, res, users, 200);
});
