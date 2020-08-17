const express = require('express');
const app = express();
const pool = require('./dbConnection');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const tweetRoutes = require('./server/routes/tweetRoutes');

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {
	const morgan = require('morgan');
	app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());


app.use('/tweets', tweetRoutes);

app.get('*', (req, res) => {
	res.redirect('/');
});

app.listen(PORT, () => {
	console.log(`Server listening to port ${PORT}`);
});
