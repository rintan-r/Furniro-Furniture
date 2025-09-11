const usersData = require('../../src/lib/data/User.cjs');

module.exports = async function userSeeder(prisma) {
//  console.log("Found", Object.keys(usersData).length, "users in usersData");

  // Hapus semua dulu biar fresh
  await prisma.User.deleteMany();

  const users = Object.values(usersData);

  // Insert sekaligus (lebih cepat)
  await prisma.User.createMany({
    data: users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password, // hashed password
    })),
    skipDuplicates: true, // biar ga error kalau id/email udah ada
  });


  console.log("Seeding complete 🚀");
};
