const express = require('express');
const route = express.Router();
const {
	add_tweet,
	delete_tweet,
	update_tweet,
	get_tweet,
	get_tweets,
} = require('../controllers/tweetControllers');

route.get('/', get_tweets);
route.post('/', add_tweet);
route.get('/:id', get_tweet);
route.put('/:id', update_tweet);
route.delete('/:id', delete_tweet);

module.exports = route;
