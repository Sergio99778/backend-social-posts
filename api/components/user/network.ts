import { Request, Response, Router } from "express";
import { success } from "../../../network/response";
import { usersControllerStore } from "./index";

export const userRouter = Router();

userRouter.get("/", function (req: Request, res: Response) {
  const users = usersControllerStore.list();
  success(req, res, users, 200);
});

userRouter.get("/:id", function (req: Request, res: Response) {
  const user = usersControllerStore.get(req.params.id);
  success(req, res, user, 200);
});
