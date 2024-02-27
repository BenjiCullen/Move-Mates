const db = require('./connection');
const { User, Service, Product } = require("../models");

db.once('open', async () => {
    await Service.deleteMany();

const Services = await Service.insertMany([
    { name: 'Cleaning' },
    { name: 'Supplies' },
    { name: 'Mates' },
    { name: 'Other services' },
]);

console.log('seeded')

await Product.deleteMany();

const products = await Product.insertMany([
    {
        name: 'Small boxes',
        description: '10  x small boxes',
        image: 'boxes2.jpg',
        Service: Services[1]._id,
        price: 40,
        quantity: 100
    },
    {
        name: 'large boxes',
        description: '10 x large boxes',
        image: 'boxes2.jpg',
        Service: Services[1]._id,
        price:  60,
        quantity: 100
    },
    {
        name: 'Simple sacktruck',
        description: 'A small sacktruck, can carry 250kg',
        image: 'sacktrucks1.jpg',
        Service: Services[1]._id,
        price: 20,
        quantity: 15
    },
    {
        name: 'Heavy duty sacktruck',
        description: 'A heavy duty sacktruck, can  carry up to  500kg',
        image: 'sacktrucks.jpg',
        Service: Services[1]._id,
        price: 40,
        quantity: 10
    },
    {
        name: 'Small house window cleaning',
        description: 'Houses up to 1000 square feet ',
        image: ' cleaning2.jpg',
        Service: Services[0]._id,
        price: 80,
        quantity: 6
    },
    {
        name: 'large house window cleaning ',
        description: 'For houses 1000 square  feet and up ',
        image: 'cleaning1.jpg',
        Service: Services[0]._id,
        price: 140,
        quantity: 6
    },
    {
        name: 'Small house Carpet cleaning',
        description: 'carpet cleaning for houses up to 1000 square feet',
        image: 'carpetcleaning1.jpg',
        Service: Services[0]._id,
        price: 70,
        quantity: 9
    },
    {
        name: 'Large house carpet cleaning',
        description: 'carpet cleaning for houses larger than 1000 square feet',
        image: 'carpetcleaning1.jpg',
        Service: Services[0]._id,
        price: 130,
        quantity: 20
    },
    {
        name: 'Small moving truck',
        description: 'Small moving truck',
        image: 'movingtrucks1.jpg',
        Service: Services[0]._id,
        price: 250,
        quantity: 8
    },
    {
        name: 'Large moving truck',
        description: 'Large moving truck',
        image: 'movingtrucks2.jpg',
        Service: Services[0]._id,
        price: 140,
        quantity: 16
    },
    {
        name: 'Get a mate to help you move',
        description: 'have one of our professionals help you to move',
        image: 'Handymen1.webp',
        Service: Services[2]._id,
        price: 100,
        quantity: 4
    },
    {
        name: 'Get 3 mates to help you move',
        description: 'Have 3 of our professionals to help you to move',
        image: 'Handymen1.webp',
        Service: Services[2]._id,
        price: 160,
        quantity: 5
    },
    {
        name: 'Gardener',
        description: 'Have one of our gardeners help make sure the house you are leaving is in tip top shape',
        image: 'gardener.webp',
        Service: Services[3]._id,
        price: 120,
        quantity: 3
    },
    {
        name: 'Specialty removalist',
        description: 'Have one of our specialty removalists help you move you most important items',
        image: 'removalist.jpg',
        Service: Services[3]._id,
        price: 120,
        quantity: 2
    },
]);

console.log('product seeded');

await User.deleteMany();

await User.create({
    firstName: 'Benjamin',
    lastName: 'Cullen',
    email: 'benculln@hotmail.com',
    password: '123456',
    orders: [{
        products: [products[0]._id, products[1]._id, products[2]._id]
    }]
});

console.log('user seeded');

process.exit();

});