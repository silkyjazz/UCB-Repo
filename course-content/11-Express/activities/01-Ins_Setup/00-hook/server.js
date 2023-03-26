// Dependencies
const express = require('express');
const movieData = require('./movies.json');
const app = express();


const PORT = 3000;


// Routes
// http://localhost:3000/?t=The%20Goonies&apikey=farley
app.get('/', (req, res) => {
	console.log("req.query: ", req.query)
	if (req.query.t && req.query.apikey){
		const searchTitle = req.query.t.toLowerCase()
		console.log("searchTitle: ", searchTitle)
	

		for (let i = 0; i < movieData.length; i++) {
			if (movieData[i].Title.toLowerCase() === searchTitle) {
				return res.json(movieData[i]);
			}
		}
		// Return a message if the term doesn't exist in our DB
		return res.json({
			"Response": "False",
			"Error": "Movie not found!"
			});
	}else {
		res.json({
			"Response": "False",
			"Error": "No API key or Query provided."
			});
	};

  
});

// http://www.omdbapi.com/?apikey=[yourkey]&
// t	Optional*		<empty>	Movie title to search for.

// Listener
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
