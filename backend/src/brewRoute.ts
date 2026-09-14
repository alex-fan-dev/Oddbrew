import { Router } from "express";

const brewRouter = Router();

brewRouter.post("/", (_request, response) => {
  response.status(501).json({ error: "Brewing is not implemented yet." });
});

export default brewRouter;
