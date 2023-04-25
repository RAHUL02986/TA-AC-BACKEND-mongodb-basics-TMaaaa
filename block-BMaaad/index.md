writeCode

Write command to

- List collections from a database.
//show coolections
- create a new collection in your country database which you created recently.


Write code to:-

- crate a database named `weather`
use weather
- create a capped collection named `temperature` with maximum of 3 documents and try inserting more than 3 to see the result.
```
db ccreateCollection('movies',{capped: true, size:1000, max:3})

db.movies.insertOne({title: "jaddu"})
db.movies.insertOne({title: "Krish"})
db.movies.insertOne({title: "undisputed"})
```
- create a simple collection named `humidity`
db.collection('humidity')
- check whether `temperature` collection is capped or not ?
db.movies.find().pretty()

- Delete `humidity` collection and then the entire database
(weather).
db.collection_humidity.drop()
db.humidity.drop()
db.dropDatabase();

