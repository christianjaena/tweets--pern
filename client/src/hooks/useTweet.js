import React from 'react';

const useTweet = () => {
	const [tweets, setTweets] = React.useState([]);

	const getTweets = async () => {
		const url = '/tweets';
		const tweets = await fetch(url);
		const response = await tweets.json();
		setTweets(response);
	};

	const addTweet = async input => {
		const url = '/tweets';
		const tweet = { tweet: input };
		const addTweet = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(tweet),
		});
		const response = await addTweet.json();
		setTweets(prevTweets => [response, ...prevTweets]);
	};

	const updateTweet = async (id, input) => {
		const url = `/tweets/${id}`;
		const tweet = { tweet: input };
		const updateTweet = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(tweet),
		});
		const response = await updateTweet.json();
		const filteredTweets = tweets.filter(tweet => tweet.id !== id);
		setTweets(prevTweets => [response, ...filteredTweets]);
	};

	const deleteTweet = async id => {
		const url = `/tweets/${id}`;
		await fetch(url, {
			method: 'DELETE',
		});
		setTweets(prevTweets => prevTweets.filter(tweet => tweet.id !== id));
	};

	React.useEffect(() => {
		getTweets();
	}, []);

	return {
		deleteTweet,
		updateTweet,
		addTweet,
		tweets,
	};
};

export default useTweet;