import React from 'react';
import tweetContext from '../providers/tweetContext.js';
const Tweet = () => {
	const { tweets } = React.useContext(tweetContext);
	return (
		<>
			{tweets.map(({ id, tweet }) => (
				<tr key={id}>
					<td>{tweet}</td>
					<td>
						<button className='btn btn-warning'>Edit</button>
					</td>
					<td>
						<button className='btn btn-danger'>Delete</button>
					</td>
				</tr>
			))}
		</>
	);
};

export default Tweet;
