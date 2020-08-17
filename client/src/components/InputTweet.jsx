import React from 'react';
import tweetContext from '../providers/tweetContext.js';
const InputTweet = () => {
	const [input, setInput] = React.useState('');
	const { addTweet } = React.useContext(tweetContext);

	return (
		<>
			<div className='d-flex'>
				<textarea
					className='form-control'
					value={input}
					onChange={e => setInput(e.target.value)}
					style={{ resize: 'none' }}
				></textarea>
				<button
					className='btn btn-primary'
					onClick={e => {
						e.preventDefault();
						addTweet(input);
						setInput('');
					}}
				>
					Tweet!
				</button>
			</div>
		</>
	);
};

export default InputTweet;
