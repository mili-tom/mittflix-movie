
# weather-widget
<p>Based on user location, this app shows the current weather and 5 day forecast.</p>
<p>Project page: https://mili-tom.github.io/weather-widget/</p>

<p>
  <img src="/src/images/mittflix.png"
</p>

## Getting Started
The weather-widget app shows current weather state and forecast for the next 5 days in realtime using OpenWeatherMap API.

### Installing
<li>$ git clone https://github.com/mili-tom/weather-widget.git</li>
<li>$ cd weather-widget</li>
<li>$ code .</li>
<li>run html file in browser</li>

### Features
<li>Prompt user to allow getting their location by using navigator.geolocation</li>
<li>Call OpenWeatherMap API</li> 
<li>Parse and display the current weather conditions and forecasted weather</li>

## API Usage
The weather-widget app uses the OpenWeatherMap API, which is particulary free (all endpoints for this app are free) and provides a way to retrieve live information about current and forecasted weather data. Details of usage:
<li>temperature data is returned in Kelvin by default; in order to be converted, an additional parameter must be entered in the API request (units=metric)</li>
<li>by signing up, every user gets API key which must be included in all requests</li>
<li>for this app are used 2 endpoints: current weather data and 5 day/3 hour forecast</li>

## Coding details
<li>Depending on the time of day when we call the database, it will return us differently structured data (the first day can be today or tomorrow), so an important part of the program is to eliminate data for today.</li>
<li>The forecast is provided in 3 hour blocks for each day, which gives us 8 forecasts for each day. To decide which temperature is the highest/lowest, data should be grouped in max and min arrays for each day.</li>
<li>Weather icon is picked for each day for the same time (noon), in order to be consistent.</li>

## Built With
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>

To begin, you'll need to clone the app from this [repository](https://github.com/jniziol/mittflix)

All the HTML and CSS is already included in `App.js` and `index.css` files. You'll need to perform an `npm install` to install all the packages necessary to run the application. Performing this includes the installation of React Router, so you won't have to do that seperately.

## To start this app

To start this app, you will need to run 2 separate commands.

### `npm run db`

This will start the database so your app actually has movies to query.<br>
The database runs on port `3001` just in case you need that info.

### `npm start`

This starts up the actual app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Requirements

The app is provided to you in a static state, but it needs to be changed to a fully dynamic React app. It has variety of functionality. You can check out a fully functional app at [here](https://mittflix.web.app/)

## Main Page

Located at `/`, this page has the following functionality:

- movies are grouped by genre.
- genre headings only show up if there are movies that belong to that genre.
- movies can belong to 1 or more genres and show up multiple times on the page.
- genres are displayed in alphabetical order.
- all the genres that have movies are displayed.

## Search (Filter)

Located on all pages, search has the following functionality:

- The search will apply to the list of movies displayed on any of the pages the user is currently visiting.

- The search filters the results down based on the input provided
- The results are filtered based on the finding matching text either within the `title` or the `overview`
- Whenever the text content of the input changes, a new filter is performed. This is dependent upon keystrokes, not submit events.
- The amount of results found are displayed below the search field.
- The search query being used is displayed below the search field.
- Don't worry about the filter *NOT* working on backspace.

## My List

Located at `/my-list`, this page has the following functionality:

- Users can see all the movies that have been added to their list
- Movies are not sorted by genres or any other specification

## Adding to My List

Located on all pages, Adding to My List has the following functionality:

- Users can hover over a movie and see a `+` sign. Clicking on this button will add a movie to their List.
- Once a movie is added to the user's list, it will show up under the `My List` section
- This update must be made in a way so that the information persists even if the browser is reloaded. This means you'll have to update the API.
- If a movie is added to the user's list, it must include a red checkmark.
- Clicking on the checkmark of a movie that is in the user's list will remove it from that list.

## MovieAPI

Provided to you, there is a `MovieAPI`, in a `MovieAPI.js` file, which is already imported for you by default in `App.js`.

The MovieAPI has the following methods available:

- `MovieAPI.getAll()`: This will return to you all the `movies` in the database.
- `MovieAPI.genre()`: This will return to you all the `genres` in the database.
- `MovieAPI.addToList(movie)`: Accepts 1 parameter, a `movie` object. It will update a movies `my_list` attribute to `true` and save it to the database for you.
- `MovieAPI.removeFromList(movie)`: Accepts 1 parameter, a `movie` object. It will update a movies `my_list` attribute to `false` and save it to the database for you.

All API endpoints return promises, so you can freely chain a `.then()` on to them. They already provide you the results in a JSON format, so you'll simply have to accept a parameter into your `then()`.

## TIPS:

- This is a cumulative project of everything we've done thus far in the last 5 months together. It is composed of many small problems, and while it can seem overwhelming, remember to divide and conquer. Break down the problem into small pieces and focus on those.

Here is an example of some of the smaller problems that you could look at solving, in an order that I think makes a lot of sense:
  - Retrieving Movies from the API and placing them into state
  - Displaying Movies from state
  - Adding movies to `My List` and saving them back to the API
  - Adding React Router to Display `My List` separately
  - Filtering Movies
  - Adding special info to `filter` based on the results
  - Breaking down the list of movies into Genres and displaying them accordingly

- We've actually done ALL of this before, so none of this is actually new. But it's a matter of making a small changes to your previous solutions and applying it in a new scenario. This is a very important skill to have as a developer.

- Ask questions if you are uncertain or something is unclear to you. I'll do my best to help remove road blocks without giving up too much of the solution.

- Start early, take breaks, celebrate small wins.

- GL HF!
