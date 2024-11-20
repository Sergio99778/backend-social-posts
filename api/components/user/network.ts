import { Request, Response, Router } from "express";
import { success, error } from "../../../network/response";
import { usersControllerStore } from "./index";
import { User } from "../../../store/interfaces/User";

export const userRouter = Router();

userRouter.get("", function (req: Request, res: Response) {
  return usersControllerStore
    .list()
    .then((users: User[]) => {
      success(req, res, users, 200);
    })
    .catch((e: Error) => {
      error(req, res, e.message, 500, "Error in user list");
    });
});

userRouter.get("/:id", function (req: Request, res: Response) {
  return usersControllerStore
    .get(req.params.id)
    .then((user: User) => {
      if (!user) {
        error(req, res, "User not found", 404, "User not found");
        return;
      }
      success(req, res, user, 200);
    })
    .catch((e: Error) => {
      error(req, res, e.message, 500, "Error in user get");
    });
});
