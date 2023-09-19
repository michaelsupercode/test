
import express from "express";

const router = express.Router();
export { router as ExampleRouter };

router.get("/example/router", (req, res) => {
  res.send("This is an example of how to use a separate file in express");
});
