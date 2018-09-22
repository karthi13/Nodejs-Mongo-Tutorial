const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err, db) => {
    if(err){
        return console.log("Bad Error");
    }
    console.log("DB Connected!!");
    
    /**
     * Fetch all the documents in a collection in the db
     */
    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, err => {
        console.log("unable to fetch todos", err);
    })

    db.collection('Users').find({name: "Karthikeyan"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, err => {
        console.log("unable to fetch todos", err);
    })

});