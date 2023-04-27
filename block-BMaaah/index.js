```use blog

  db.createCollection("articals")
  db.articals.insert( {
    _id: '001',
    title: 'fullStack-developer',
    details: 'how to become a developer',
    author: {
      name: 'rahul kapoor',
      email: 'kapoor@gmail.com',
      age: 25
    },
    tags: ['js', 'mongo']
  })
  db.articals.find()

  db.articals.find({    _id: '001'
})

db.articals.find(    {title: 'fullStack-developer'})
db.articals.find({"author.name":"rahul kapoor"}).pretty()
db.articals.find({'tags':'js'}).pretty()

db.articals.update({    _id: '001'},{$set:{'title':'FrontEnd developer'}});

db.articals.update({title: 'FrontEnd developer'},{$set:{'author.name':'John livingston'}});

db.articals.updateMany({},{$rename:{details: "discription"}})

db.articals.update({  _id: '001'},{$push:{'tags' : "node"}})
db.articals.update({_id: '001'},{$inc:{'author.age':5}})

db.articals.remove({_id: '001'})

db.users.find({$and:[{gender:"Male"},{sports:"cricket"}]}).pretty()

db.users.update({name: 'Steve Ortega'},{$push:{sports:"golf"}})

db.users.find({$or:[{sports:"football"},{sports:"cricket"}]}).pretty()

db.users.find({name: /ri/i}).pretty()

```