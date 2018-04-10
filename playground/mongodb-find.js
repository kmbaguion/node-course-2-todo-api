const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB sever');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5acc331244f9f20c5881bc35')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined,2));
	// }, (err) => {
	// 	if(err){
	// 		console.log('Unable to fetch', err);
	// 	}
	// });

		db.collection('Todos').find().count().then((count) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		if(err){
			console.log('Unable to fetch', err);
		}
	});

});