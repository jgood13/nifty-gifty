const { User } = require("../models");

const userData = [
  {
    name: "Test",
    email: "test@test.com",
    password: "password",
  },
  {
    name: "Mandrake",
    email: "mandrake@test.com",
    password: "password",
  },
  {
    name: "Justin",
    email: "justin@test.com",
    password: "password",
  },
  {
    name: "Brandon",
    email: "brandon@test.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
