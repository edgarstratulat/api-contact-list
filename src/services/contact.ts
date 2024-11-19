import { readFile, writeFile } from "fs/promises";
const dataSource = "./data/list.txt";

export const getContacts = async () => {
  let list: string[] = [];
  try {
    const data = await readFile(dataSource, { encoding: "utf8" });

    list = data.split("\n");
  } catch (err) {}

  return list;
};

export const CreateContact = async (name: string, phone: any) => {
  let list = await getContacts();

  list.push(name, phone);
  await writeFile(dataSource, list.join("\n"));
};
