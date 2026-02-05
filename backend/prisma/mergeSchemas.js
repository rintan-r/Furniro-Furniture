// prisma/mergeSchemas.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(__dirname, "schema.prisma");
const modelsDir = path.join(__dirname, "models");
const enumsDir = path.join(__dirname, "enums");

let schema = fs.readFileSync(schemaPath, "utf-8");

// gabungin enums dulu
if (fs.existsSync(enumsDir)) {
  const enumFiles = fs.readdirSync(enumsDir).sort();
  for (const file of enumFiles) {
    const content = fs.readFileSync(path.join(enumsDir, file), "utf-8");
    schema += "\n\n" + content.trim() + "\n";
  }
}

// lalu gabungin models
if (fs.existsSync(modelsDir)) {
  const modelFiles = fs.readdirSync(modelsDir).sort();
  for (const file of modelFiles) {
    const content = fs.readFileSync(path.join(modelsDir, file), "utf-8");
    schema += "\n\n" + content.trim() + "\n";
  }
}

fs.writeFileSync(schemaPath, schema);

console.log("✅ schema.prisma updated with enums + models");
