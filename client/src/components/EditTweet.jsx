import React from 'react';
import tweetContext from '../providers/tweetContext.js';
const EditTweet = ({ id, tweet }) => {
	const { updateTweet } = React.useContext(tweetContext);
	const [input, setInput] = React.useState('');

	return (
		<>
			<button
				type='button'
				className='btn btn-warning'
				data-toggle='modal'
				data-target={`#modal${id}`}
				onClick={() => setInput(tweet)}
			>
				Edit
			</button>

			<div className='modal' id={`modal${id}`} onClick={() => setInput(tweet)}>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h4 className='modal-title'>Edit Tweet</h4>
							<button
								onClick={() => setInput(tweet)}
								type='button'
								className='close'
								data-dismiss='modal'
							>
								&times;
							</button>
						</div>

						<div className='modal-body'>
							<input
								type='text'
								value={input}
								onChange={e => {
									setInput(e.target.value);
								}}
							/>
						</div>

						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-warning'
								data-dismiss='modal'
								onClick={e => {
									e.preventDefault();
									updateTweet(id, input);
								}}
							>
								Update
							</button>
							<button
								type='button'
								className='btn btn-danger'
								data-dismiss='modal'
								onClick={() => setInput(tweet)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditTweet;
