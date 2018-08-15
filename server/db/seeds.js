use bucket;
db.dropDatabase();

db.items.insertMany([
  { item: "Learn French", completed: "false" },
  { item: "Do a bungee jump", completed: "false" },
  { item: "See a Black Rhino", completed: "false" },
  { item: "Miss Zsolt", completed: "false" },
  { item: "Swim with sharks", completed: "false" }
]);
