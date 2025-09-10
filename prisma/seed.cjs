const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function runSeeder(name, seeder) {
  try {
    console.log(`🚀 Running ${name} seeder...`);
    await seeder(prisma);
    console.log(`✅ ${name} seeder complete`);
  } catch (err) {
    console.error(`❌ Error in ${name} seeder:`, err);
  }
}

// import seeder modular
const productSeeder = require('./seeds/products.seed.cjs');
const productDetailSeeder = require('./seeds/productDetail.seed.cjs');
// const userSeeder = require('./seeds/user.seed'); // contoh tambahan

async function main() {
  await runSeeder("Products", productSeeder);
  await runSeeder("ProductDetail", productDetailSeeder);
  // await runSeeder("Users", userSeeder);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
