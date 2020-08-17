import React from 'react';
import InputTweet from './InputTweet';
import Feed from './Feed';
import tweetContext from '../providers/tweetContext.js';
import useTweet from '../hooks/useTweet.js';
const Tweets = () => {
	const { tweets, addTweet, deleteTweet, updateTweet } = useTweet();
	return (
		<>
			<h1>Tweets</h1>
			<tweetContext.Provider
				value={{ tweets, addTweet, deleteTweet, updateTweet }}
			>
				<InputTweet />
				<Feed />
			</tweetContext.Provider>
		</>
	);
};

export default Tweets;
