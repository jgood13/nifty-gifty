const { User } = require("../models");

const userData = [
  {
    username: "Test",
    email: "test@test.com",
    password: "password",
  },
  {
    username: "Mandrake",
    email: "mandrake@test.com",
    password: "password",
  },
  {
    username: "Justin",
    email: "justin@test.com",
    password: "password",
  },
  {
    username: "Brandon",
    email: "brandon@test.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
