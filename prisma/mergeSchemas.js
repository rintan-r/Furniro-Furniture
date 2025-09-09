// prisma/mergeSchemas.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// supaya __dirname bisa dipakai di ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const schemaPath = path.join(__dirname, "schema.prisma");
const modelsDir = path.join(__dirname, "models");

let schema = fs.readFileSync(schemaPath, "utf-8");

// gabungin semua file di /prisma/models
const files = fs.readdirSync(modelsDir);
for (const file of files) {
  const content = fs.readFileSync(path.join(modelsDir, file), "utf-8");
  schema += "\n\n" + content;
}

// tulis ulang schema.prisma hasil merge
fs.writeFileSync(schemaPath, schema);

console.log("✅ schema.prisma updated with models");

//npm run prisma:generate   ===> to merge schemas and generate client
