const app = require();

async function find(client, nameOfListing) {
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findAll;

   client.db("sample_airbnb").collection("listingsAndReviews").find(
      {
         bedrooms: { $gte: 3 },
         bathrooms: { $gte: 3 }
      }
   )
};
module.exports =app;
