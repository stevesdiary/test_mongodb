const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const routes = require('./routes');


const express = require("express");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://project:123abc@newp.smkqs.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
   try {
      // To add one entry
   // async function createListing(client, newListing){
   //    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
   //    console.log(`New listing created with the following id: ${result.insertedId}`);
   // }
   // await createListing(client,
   //    {
   //       name: "Amazing View",
   //       summary: "Ocean view in Berlin",
   //       bedrooms: 2,
   //       bathrooms: 2
   //    }
   // )
   // To insert  Many entries
   // async function createMultipleListing(client, newListings){
   //    const result =await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
   //    console.log(`These ${result.insertedCount} Listing(s) have been created with the following id(s): `);
   //    console.log(result.insertedIds)
   // }
   // await createMultipleListing(client, [
   //    {
   //       name: "Mountaieous Terrace",
   //       summary: "Modern home with infinite views from the infinity pool",
   //       property_type: "House",
   //       bedrooms: 3,
   //       bathrooms: 3,
   //       beds: 5
   //    },
   //    {
   //       name: "Private room in Washinton D.C",
   //       summary: "A taste of luxury and privacy",
   //       property_type: "Apartment",
   //       bedrooms: 1,
   //       bathroom: 1
   //    },
   //    {
   //       name: "Luxury Beach House",
   //       summary: "Enjoy relaxed beach living in this house with a private beach",
   //       bedrooms: 5,
   //       bathrooms: 4,
   //       beds: 7
   //    }
   // ]);
// Setting up Quary for listing(s)
async function findOneListingByName(client, nameOfListing){
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ name: nameOfListing });

   if (result) {
       console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
       console.log(result);
   } else {
       console.log(`No listings found with the name '${nameOfListing}'`);
   }
}

// findOne({ name: nameOfListing})

await findOneListingByName(client, "Mountain Views");


async function findOneListingByNumberOfRoom(client, numberOfRooms){
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({ bedrooms: numberOfRooms});
   if (result) {
      console.log(`Found a listing in the collection with the number of rooms '${numberOfRooms}':`);
      console.log(result);
   } else {
      console.log(`No listings found with the number of rooms '${numberOfRooms}'`);
   }

}
await findOneListingByNumberOfRoom(client, 5 );

   } finally {
    // Ensures that the client will close when you finish/error
      await client.close();
   }
}


run().catch(console.dir);