const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoAPP',(err, db) => {
    if(err){
        return console.log("Bad Error");
    }
    console.log("DB Connected!!");
    
    db.collection('Todos').findOneAndUpdate({
        _id : new ObjectID('5ba545dd6818858dcf687db4')
    },{
        $set : {
            completed : true
        }
    },{
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    })
    // db.collection('Users').find({name: "Karthikeyan"}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, err => {
    //     console.log("unable to fetch todos", err);
    // })

});