import React from 'react';
import tweetContext from '../providers/tweetContext.js';
const InputTweet = () => {
	const [input, setInput] = React.useState('');
	const { addTweet } = React.useContext(tweetContext);

	return (
		<>
			<div className='d-flex'>
				<input
					type='text'
					className='form-control'
					onChange={e => setInput(e.target.value)}
				/>
				<button
					className='btn btn-primary'
					onClick={e => {
						e.preventDefault();
						addTweet(input);
					}}
				>
					Tweet!
				</button>
			</div>
		</>
	);
};

export default InputTweet;
