import { Request, Response } from "express";

export const success = function (
  req: Request,
  res: Response,
  message: Record<string, any> | Record<string, any>[],
  status: number
) {
  return res.status(status || 200).send({
    error: false,
    status: status || 200,
    body: message,
  });
};

export const error = function (
  req: Request,
  res: Response,
  message: string,
  status: number,
  details: string
) {
  console.error(`[response error] ${details}`);
  return res.status(status || 500).send({
    error: message || "Internal server error",
    status: status || 500,
    body: false,
  });
};
