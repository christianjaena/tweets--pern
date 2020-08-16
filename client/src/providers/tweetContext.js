import { createContext } from 'react';

const tweetContext = createContext({
	tweets: [],
	addTweet: () => {}
});

export default tweetContext;
