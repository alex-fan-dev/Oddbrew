import express from "express";
import brewRouter from "./brewRoute.js";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());
app.use("/api/brew", brewRouter);

app.listen(port, () => {
  console.log(`Oddbrew backend listening on port ${port}`);
});
