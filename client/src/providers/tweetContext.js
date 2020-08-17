import { createContext } from 'react';

const tweetContext = createContext({
	tweets: [],
	addTweet: () => {},
	deleteTweet: () => {},
	updateTweet: () => {}
});

export default tweetContext;
