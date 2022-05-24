import { Express, NextFunction, Request, Response } from "express";

export default function routes(app: Express) {
  app.get("/ping", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ msg: "pong" });
  });
}
