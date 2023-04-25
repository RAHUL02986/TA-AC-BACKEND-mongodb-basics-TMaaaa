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
db.createCollection('temperature',{capped: true, size:1024, max:3})

db.temperature.insertOne([{delhi:64}, {mumbai:32}, {hydrabaad: 43}]);
db.temperature.find();
```
- create a simple collection named `humidity`
db.collection('humidity')
- check whether `temperature` collection is capped or not ?
db.temperature.isCapped();

- Delete `humidity` collection and then the entire database
(weather).
db.collection_humidity.drop()
db.humidity.drop()
db.dropDatabase();

