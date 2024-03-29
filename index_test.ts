import { expect, test } from "bun:test";
import textFromImport from "./text.txt";

test("txt import", async () => {
  const file = Bun.file("./text.txt");
  const textFromFile = await file.text();
  expect(textFromImport).toBe(textFromFile);
});

