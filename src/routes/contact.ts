import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, phone } = req.body;

  const validateName = (name: string): boolean => {
    if (!name || name.length < 2) {
      return false;
    }

    return true;
  };

  const validatePhone = (phone: Number): boolean => {
    if (!phone || phone.toString().length !== 9) {
      return false;
    }

    if (typeof phone !== "number") {
      return false;
    }

    return true;
  };

  if (!validateName(name)) {
    res.status(400).json({ error: "Name is invalid!" });
  }

  if (!validatePhone(phone)) {
    res.status(400).json({ error: "Phone Number is invalid!" });
  }

  res.status(201).json({ contact: name, phone: phone });
});

export default router;
