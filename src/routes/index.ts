import express from "express";
import contactsRouter from "./contact";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Welcome, to Contact List API");
});

router.use("/contact", contactsRouter);

export default router;
