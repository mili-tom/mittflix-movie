# mittflix-movie
<p>Providing data about movies from API, displaying them by genre with possibility to add/remove movie in/from My List, which automatically update API.</p>
<p>Project page: https://mili-tom.github.io/mittflix-movie</p>

### Installing
<li>$ git clone https://github.com/mili-tom/mittflix-movie.git</li>
<li>$ cd mittflix-movie</li>
<li>$ npm install</li>
<li>$ npm run db</li>
<li>$ npm start</li>

### `npm run db`
This will start the database in order that app actually has movies to query.<br>
The database runs on port `3001`.

### `npm start`
This starts up the actual app in the development mode.<br>

### Features
<li>Call MovieAPI</li> 
<li>Display movies from database by their genre</li>
<li>User is able to click on particular movie to add/remove it in "MyList"</li>
<li>Update MovieAPI based on user preferencies</li>
<li>User is able to filter movies, based on their query</li>

## API Usage
The MovieAPI has the following methods available:

- `MovieAPI.getAll()`: This will return to you all the `movies` in the database.
- `MovieAPI.genre()`: This will return to you all the `genres` in the database.
- `MovieAPI.addToList(movie)`: Accepts 1 parameter, a `movie` object. It will update a movies `my_list` attribute to `true` and save it to the database for you.
- `MovieAPI.removeFromList(movie)`: Accepts 1 parameter, a `movie` object. It will update a movies `my_list` attribute to `false` and save it to the database for you.

All API endpoints return promises, it is neccessary to chain a `.then()` on to them. They already provide you the results in a JSON format.

## Built With
<li>HTML</li>
<li>CSS</li>
<li>JavaScrip</li>
<li>React</li>
