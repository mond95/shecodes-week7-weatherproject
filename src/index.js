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

  //   now we want to replace the h1 header i.e. the city name with whatever we've searched for
  let cityElement = document.querySelector("#city");
  //   this replaces what ever is inside the h1 element with the value entered in the search bar
  cityElement.innerHTML = searchInput.value;
}

// to be able to have the city name update with what we searched in the text box
// we need to have an id on the form so we can target it from javascript - id = "search-form"
let searchFormElement = document.querySelector("#search-form");
// to check we have selected the correct element
// console.log(searchFormElement);

// adding an event listener - whenever we submit this form which happens when we click on the search button or press enter on the keyboard
// then we will call this function handleSearchSubmit which we will create at the top of the code
searchFormElement.addEventListener("submit", handleSearchSubmit);
