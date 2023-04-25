writeCode

Write code to:-

- create a database named `sports`.
use sports
- list all databases present in local mongod server.
show dbs
- create 3 collections named `cricket`, `football`, `TT` in sports databse.
db.createCollection("cricket"),
db.createCollection("football"),
db.createCollection("TT")



- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

db.cricket.insert({name:"rahul", age:25, email:"kapoorrahul304@gmail.com",bid_price:"2cr"})
db.football.insert({name:"rahul", age:25, email:"kapoorrahul304@gmail.com",bid_price:"1cr"})
db.TT.insert({name:"rahul", age:25, email:"kapoorrahul304@gmail.com",bid_price:"3cr"})

- list all collections in sports database.
- rename `TT` collection to `tennis`.
db.TT.renameCollection("tennis", true)
- create a capped collection called `khokho` which should have max 3 documents.
db.createCollection("khokho";{capped:true, size:1024, max:3})
  Try inserting more than 3 and see what happens?
db.khokho.insert([{name:"rahul"},{age:24},{email:"kappor@gmail.com"},{bid_price:"2cr"}])
db.khokho.find()
{ "_id" : ObjectId("644761cd7a9ef669034e98b5"), "age" : 24 }
{ "_id" : ObjectId("644761cd7a9ef669034e98b6"), "email" : "kappor@gmail.com" }
{ "_id" : ObjectId("644761cd7a9ef669034e98b7"), "bid_price" : "2cr" }            
- check whether a collection is capped or not?
db.khokho.isCapped();
- drop all documents from `football` collection.
 db.fooltball.remove({})

- delete cricket collection completely.
db.cricket.drop()
- delete sports database.
db.dropDatabase();

- check which database you are connected to ?
still Connecting sportsData base

- connect to test database
use test
