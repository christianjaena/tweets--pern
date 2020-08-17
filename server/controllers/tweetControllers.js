const pool = require('../../dbConnection');

const get_tweets = async (req, res) => {
	try {
		const getTweets = await pool.query('SELECT * FROM tweets ORDER BY id DESC');
		res.json(getTweets.rows);
	} catch (err) {
		console.log(err.message);
	}
};

const add_tweet = async (req, res) => {
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
};

const get_tweet = async (req, res) => {
	try {
		const { id } = req.params;
		const getTweet = await pool.query('SELECT * FROM tweets WHERE id = $1', [
			id,
		]);
		res.json(getTweet.rows[0]);
	} catch (err) {
		console.log(err.message);
	}
};

const update_tweet = async (req, res) => {
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
};

const delete_tweet = async (req, res) => {
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
};

module.exports = {
	add_tweet,
	get_tweet,
	delete_tweet,
	update_tweet,
	get_tweets
};
