import { Request, Response, Router } from "express";
import { success } from "../../../network/response";

export const userRouter = Router();

userRouter.get("/", function (req: Request, res: Response) {
  success(req, res, "User", 200);
});
