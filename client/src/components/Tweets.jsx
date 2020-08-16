import React from 'react';
import InputTweet from './InputTweet';
import Feed from './Feed';
import tweetContext from '../providers/tweetContext.js';
const Tweets = () => {
	const [tweets, setTweets] = React.useState([]);

	const getTweets = async () => {
		const url = '/tweets';
		const tweets = await fetch(url);
		const response = await tweets.json();
		setTweets(response);
	};

	const addTweet = async input => {
		const url = '/tweet';
		const tweet = { tweet: input };
		const addTweet = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(tweet),
		});
		const response = await addTweet.json();
		setTweets(prevState => [...prevState, response]);
	};

	React.useEffect(() => {
		getTweets();
	}, []);

	return (
		<>
			<h1>Tweets</h1>
			<tweetContext.Provider value={{ tweets, addTweet }}>
				<InputTweet />
				<Feed />
			</tweetContext.Provider>
		</>
	);
};

export default Tweets;
