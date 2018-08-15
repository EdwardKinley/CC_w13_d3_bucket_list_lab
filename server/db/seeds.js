use bucket;
db.dropDatabase();

db.items.insertMany([
  { item: "Learn French" },
  { item: "Do a bungee jump" },
  { item: "See a Black Rhino" },
  { item: "Miss Zsolt" },
  { item: "Swim with sharks" }
]);
