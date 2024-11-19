import { error } from "console";
import express from "express";
import { readFile, writeFile } from "fs/promises";

const dataSource = "./data/list.txt";

const router = express.Router();

router.post("/", async (req, res) => {
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

  //Processamento de dados
  let list: string[] = [];
  try {
    const data = await readFile(dataSource, { encoding: "utf8" });

    list = data.split("\n");
  } catch (err) {}

  list.push(name, phone);
  await writeFile(dataSource, list.join("\n"));

  res.status(201).json({ contact: name, phone: phone });
});

router.get("/", async (req, res) => {
  let list: string[] = [];
  try {
    const data = await readFile(dataSource, { encoding: "utf8" });

    list = data.split("\n");
  } catch (err) {}

  res.status(200).json({ contact: list });
});

router.delete("/", async (req, res) => {
  const { name, phone } = req.query;

  if (!name || !phone) {
    res
      .status(400)
      .json({ error: "Precisa de  um nome e um número para eliminar" });
    return;
  }

  let list: string[] = [];
  try {
    const data = await readFile(dataSource, { encoding: "utf8" });

    list = data.split("\n");
  } catch (err) {}

  list = list.filter((item) => {
    return item.toLowerCase() !== name && item !== phone;
  });

  await writeFile(dataSource, list.join("\n"));

  res.status(200).json({ contact: name, phone: phone });
});

export default router;
