const mongoose = require('mongoose');
const Product = require('./models/Product');





const products = [
    {
        name:"Iphone 14 pro",
        img:"https://images.unsplash.com/photo-1680687688158-e9165395ff00?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8fDA%3D",
        price: 130000,
        desc: "The Apple iPhone 14 offers smooth performance with the A15 Bionic chip and a 6.1-inch Super Retina XDR display"
    },
    {
        name:"Macbook m2 pro",
        img:"https://images.unsplash.com/photo-1718279599787-7ae48695bfd1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150000,
        desc:"The Apple MacBook Pro M2 Pro delivers powerful performance, stunning display, long battery life."
    },
    {
        name:"Samsung S24",
        img:"https://images.unsplash.com/photo-1706300896423-7d08346e8dbb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90000,
        desc:"The Samsung Galaxy S24 delivers powerful performance, AI features, excellent camera, compact premium design."
    },
    {
        name:"airpods",
        img:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 5499,
        desc:"Wireless earbuds with seamless Apple integration, clear sound, long battery."
    },
    {
        name:"Head phone",
        img:"https://media.istockphoto.com/id/1315356912/photo/beoplay-h6-headphone.webp?s=612x612&w=is&k=20&c=fGYIl6B_yNCbU21-r89mGKmJcM9EcbPQcgwI1VFEJ9Y=",
        price: 3499,
        desc:"Wireless headphones offering clear sound, comfort, deep bass, long battery."
    },
    {
        name:"bluetooth Speaker",
        img:"https://media.istockphoto.com/id/924827878/photo/bluetooth-speaker-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=n_5c_2tSuaofJZh_SQd28_iJBWunS9YB1sVigHE1_y4=",
        price: 2349,
        desc:"Portable Bluetooth speaker delivering loud sound, deep bass, wireless connectivity."
    }
]

async function seedDB(){
    // await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;