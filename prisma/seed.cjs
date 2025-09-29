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
const productSeeder = require('./seeds/Product.seed.cjs');
const productDetailSeeder = require('./seeds/ProductDetail.seed.cjs');
const userSeeder = require('./seeds/User.seed.cjs');

async function main() {
  await runSeeder("Product", productSeeder);
  await runSeeder("ProductDetail", productDetailSeeder);
  await runSeeder("User", userSeeder);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
