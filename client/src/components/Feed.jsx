import React from 'react';
import Tweet from './Tweet';
const Feed = () => {
	return (
		<>
			<table className='table text-center'>
				<thead>
					<tr>
						<td>Tweet</td>
						<td>Edit</td>
						<td>Delete</td>
					</tr>
				</thead>
				<tbody>
					<Tweet />
				</tbody>
			</table>
		</>
	);
};

export default Feed;
