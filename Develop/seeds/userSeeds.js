const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
    {
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123'
    },
    {
        username: 'jane_smith',
        email: 'jane@example.com',
        password: 'password123'
    },
    {
        username: 'alex_miller',
        email: 'alex@example.com',
        password: 'password123'
    },
    {
        username: 'emily_brown',
        email: 'emily@example.com',
        password: 'password123'
    },
    {
        username: 'michael_jackson',
        email: 'michael@example.com',
        password: 'password123'
    },
    {
        username: 'sarah_jones',
        email: 'sarah@example.com',
        password: 'password123'
    },
    {
        username: 'chris_evans',
        email: 'chris@example.com',
        password: 'password123'
    },
    {
        username: 'lisa_smith',
        email: 'lisa@example.com',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;