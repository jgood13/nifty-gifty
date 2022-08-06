const { User } = require("../models");

const userData = [
  {
    id: 1,
    name: "Test",
    email: "test@test.com",
    password: "password",
  },
  {
    id: 2,
    name: "Mandrake",
    email: "mandrake@test.com",
    password: "password",
  },
  {
    id: 3,
    name: "Justin",
    email: "justin@test.com",
    password: "password",
  },
  {
    id: 4,
    name: "Brandon",
    email: "brandon@test.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
