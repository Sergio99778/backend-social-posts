import express from "express";
import { Request, Response } from "express";
import { error, success } from "../../../network/response";

const router = express.Router();

router.get("/", function (req: Request, res: Response) {
  success(req, res, "User", 200);
});

module.exports = router;
