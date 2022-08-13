const { User } = require("../models");

const userData = [
  {
    id: "1",
    username: "Joe",
    email: "test@test.com",
    password: "password",
  },
  {
    id: "2",
    username: "Mandrake",
    email: "mandrake@test.com",
    password: "password2",
  },
  {
    id: "3",
    username: "Justin",
    email: "justin@test.com",
    password: "password3",
  },
  {
    id: "4",
    username: "Brandon",
    email: "brandon@test.com",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
