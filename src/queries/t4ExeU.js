db.restaurante.find();
db.restaurant.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurant.find({},{_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurant.find({},{_id: 0, address: {zipcode: 1}, restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
db.restaurant.find({borough: "Bronx"},{_id: 0, restaurant_id: 1, name: 1, borough: 1});
db.restaurant.find().limit(5);
db.restaurant.find({},{_id: 0, restaurant_id: 1}).skip(5).limit(5);
db.restaurant.find({ 'grades.score': {$gt: 90}}, {_id: 0, restaurant_id: 1, grades: {score: 1}});
db.restaurant.find({$and: [ { 'grades.score': {$gt: 90}}, { 'grades.score': {$lt: 100}} ]}, {_id: 0, restaurant_id: 1, grades: {score: 1}});
db.restaurant.find({ 'address.coord': {$lt: -95.754168}}, {_id: 0, restaurant_id: 1, address: {coord: 1}});
db.restaurant.find({$and: [ {cuisine: {'$regex' : '^((?!American).)*$', '$options' : 'i'} }, { 'grades.score': {$gt: 70}}, {'address.coord': {$lt: -65.754168}}]}, {_id: 0, restaurant_id: 1, cuisine: 1, grades: {score: 1}});

db.restaurant.find({ 'name': {'$regex' : '^Wil', '$options' : 'i'}}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
db.restaurant.find({ 'name': {'$regex' : 'ces$', '$options' : 'i'}}, {_id: 0, restaurant_id: 1,  name: 1, borough: 1, cuisine: 1 });
db.restaurant.find({ 'name': {'$regex' : 'Reg', '$options' : 'i'}}, {_id: 0, restaurant_id: 1,  name: 1, borough: 1, cuisine: 1 });

db.restaurant.find({ 'name': {'$regex' : 'mon', '$options' : 'i'}}, {_id: 0, name: 1, cuisine: 1, borough: 1, address: {coord: 1}  });
db.restaurant.find({ 'name': {'$regex' : '^Mad', '$options' : 'i'}}, {_id: 0, name: 1, cuisine: 1, borough: 1, address: {coord: 1}  });
