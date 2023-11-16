const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'c8a595cade8644288e837a1ba34fcd1e'
});

const handleApiCall = (req, res) => {
	app.models
	.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	.then(data => {
		res.json(data);
	})
	.catch(err => res.status(400).json('Unable to communicate with API.'))
}

const handleImage = (db) => (req, res) => {
	const { id } = req.body;
	db('users')
	.where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('Lol wut?'))
}

module.exports = {
	handleImage,
	handleApiCall
};