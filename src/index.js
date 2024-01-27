// FUNCTION WHICH RECEIVES THE RESPONSE FROM THE API CALL DONE IN THE BELOW FUNCTION AND THEN CONSOLE LOGS THE DATA FOR THE CITY SEARCHED FOR
function refreshWeather(response) {
  // to see the whole object of the city's data
  console.log(response.data);
  // to see the current temperature
  //   console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

// FUNCTION TO UPDATE THE TEMPERATURE WITH AN API CALL BASED ON THE CITY THAT HAS BEEN SEARCHED
// creating a new function called searchCity which will receive a city name and based on that it will update with the corresponding temperature
// creating a separate function for this due to a concept in computer science "the separation of concerns" i.e. we want something to do only one thing and do it well
// using the she codes API documentation https://www.shecodes.io/learn/apis/weather
function searchCity(city) {
  // make an API call and update the UI
  let apiKey = "145at3bd88ddc4bf6od1483d03f4ef43";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={${city}&key=${apiKey}&units=metric`;
  //   can test this works by console logging and seeing if the URL appears when search for a city in the console log which when you click on the URL can see the data
  //   console.log(apiUrl);
  //   making the request i.e. getting the results of this API using axios so that we can update the temperature for the searched city
  axios.get(apiUrl).then(refreshWeather);
}

// FUNCTION TO UPDATE THE CITY H1 HEADER FROM THE SEARCH
// putting the function at the top for the search button
// this wil receive an event (from the event listener done below, i.e. 'submit')
// this function will be called eery time we submit due to the event listener later
function handleSearchSubmit(event) {
  // first thing to do is to prevent the default behaviour i.e. the reloading of the page or going to the action of the form (but in this case we don't have the 'action' as we removed that from the form html tag)
  event.preventDefault();
  //   getting the value of the search input
  let searchInput = document.querySelector("#search-form-input");
  //   checking it is correrctly logging what we input in the search bar
  //   console.log(searchInput.value);

  // LATER MOVED the below up into the searchCity function so that it updates with the actual name data from the API rather than just the user's typed searched city input]
  //   THIS IS BECAUSE even if we then searched for e.g. Miami like MiAMi, that will still search for this city correctly with the API but it will display the city name correctly in the H1 without all the random uppercase etc
  //   now we want to replace the h1 header i.e. the city name with whatever we've searched for
  //   let cityElement = document.querySelector("#city");
  //   this replaces what ever is inside the h1 element with the value entered in the search bar
  //   cityElement.innerHTML = searchInput.value;
  //   sending the city that has been searched also to the function which will call the API so the temperature can be based on the searched city
  searchCity(searchInput.value);
}

// to be able to have the city name update with what we searched in the text box
// we need to have an id on the form so we can target it from javascript - id = "search-form"
let searchFormElement = document.querySelector("#search-form");
// to check we have selected the correct element
// console.log(searchFormElement);

// adding an event listener - whenever we submit this form which happens when we click on the search button or press enter on the keyboard
// then we will call this function handleSearchSubmit which we will create at the top of the code
searchFormElement.addEventListener("submit", handleSearchSubmit);

// when we reload, this will have london by default
searchCity("London");
