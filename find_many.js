const app = require();

async function find(client, nameOfListing) {
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findAll;

   client.db("sample_airbnb").collection("listingsAndReviews").find(
      {
         bedrooms: { $gte: 2 },
         bathrooms: { $gte: 2 }
      }
   )
};
module.exports =app;
