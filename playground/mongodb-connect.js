const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err, db) => {
    if(err){
        return console.log("Bad Error");
    }
    console.log("DB Connected!!");
    
    /**
     * Insert A document into the collection.
     */
    // db.collection('Todos').insertOne({
    //     todo : "Computer Methods Excercise",
    //     completed : false
    // }, (err,result) => {
    //     if(err){
    //         return console.log("Unable to insert into the Collection", err);
    //     }

    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });

    /**
     * Fetch all the documents in a collection in the db
     */
    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, err => {
    //     console.log("unable to fetch todos", err);
    // })

    db.collection('Users').find({name: "Karthikeyan"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs,undefined,2));
    }, err => {
        console.log("unable to fetch todos", err);
    })

    /**
     * Insert A document into the collection.
     */
    // db.collection('Users').insertOne({
    //     name : 'Karthikeyan',
    //     age : 26,
    //     location : 'Kristianstad, Sweden'
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert into the Collection", err);
    //     }
    //     console.log(JSON.stringify(result.ops), undefined, 2);
    // });
    // db.close();
});