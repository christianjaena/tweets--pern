import React from 'react';
import tweetContext from '../providers/tweetContext.js';
import EditTweet from './EditTweet';
const Tweet = () => {
	const { tweets, deleteTweet } = React.useContext(tweetContext);

	return (
		<>
			{tweets.map(({ id, tweet }) => (
				<tr key={id}>
					<td>{tweet}</td>
					<td>
						<EditTweet id={id} tweet={tweet} />
					</td>
					<td>
						<button
							className='btn btn-danger'
							onClick={e => {
								e.preventDefault();
								deleteTweet(id);
							}}
						>
							Delete
						</button>
					</td>
				</tr>
			))}
		</>
	);
};

export default Tweet;
