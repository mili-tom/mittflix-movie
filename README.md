# mittflix-movie
<p>Based on user location, this app shows the current weather and 5 day forecast.</p>
<p>Project page: https://mili-tom.github.io/weather-widget/</p>

<p>
  <img src="/src/images/mittflix.png"
</p>

## Getting Started
The weather-widget app shows current weather state and forecast for the next 5 days in realtime using OpenWeatherMap API.

### Installing
<li>$ git clone https://github.com/mili-tom/mittflix-movie.git</li>
<li>$ cd weather-widget</li>
<li>$ npm install</li>
<li>$ npm run db</li>
<li>$ npm start</li>

### `npm run db`

This will start the database in order that app actually has movies to query.<br>
The database runs on port `3001`.

### `npm start`

This starts up the actual app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

## Built With
<li>HTML</li>
<li>CSS</li>
<li>JavaScrip</li>
<li>React</li>

