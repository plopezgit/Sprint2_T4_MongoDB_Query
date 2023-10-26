db.restaurante.find();
db.restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurant.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurant.find({},{_id: 0, address: {zipcode: 1}, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurant.find({borough: "Bronx"},{_id: 0, restaurant_id: 1, name: 1, borough: 1});
db.restaurant.find().limit(5);
db.restaurant.find({},{_id: 0, restaurant_id: 1}).skip(5).limit(5);