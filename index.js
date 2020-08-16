const express = require('express');
const app = express();
const pool = require('./dbConnection');
const cors = require('cors');
const PORT = process.env.PORT || 5000; 

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build/'));
}
 else {
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.post('/tweet', async (req, res) => {
	try {
		const { tweet } = req.body;
		const addTweet = await pool.query(
			'INSERT INTO tweets (tweet) VALUES ($1) RETURNING *',
			[tweet]
		);
		res.json(addTweet.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.get('/tweets', async (req, res) => {
	try {
		const getTweets = await pool.query('SELECT * FROM tweets');
		res.json(getTweets.rows);
	} catch (err) {
		console.log(err.message);
	}
});

app.get('/tweet/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const getTweet = await pool.query('SELECT * FROM tweets WHERE id = $1', [
			id,
		]);
		res.json(getTweet.rows[0]);
	} catch (err) {
		console.log(err.message);
	}
});

app.put('/tweet/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { tweet } = req.body;
		const updateTweet = await pool.query(
			'UPDATE tweets SET tweet = $1 WHERE id = $2 RETURNING *',
			[tweet, id]
		);
		res.json(updateTweet.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.delete('/tweet/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTweet = await pool.query(
			'DELETE FROM tweets WHERE id = $1 RETURNING *',
			[id]
		);
		res.json(deleteTweet.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.get('*', (req, res) => {
	res.redirect('/');
})

app.listen(PORT, () => {
	console.log(`Server listening to port ${PORT}`);
});
