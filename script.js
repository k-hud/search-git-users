'use strict';

var url = "https://api.github.com/users/";
// :username/repos - is endpoint
var apiKey = "67649941d385b4e1860eb79d8568a696060554fb";


function eventListener() {
  $('.search-form').submit(event => {
    event.preventDefault();
    let usernameInput = $('#user-search-input').val();
    let urlQuery = url + `${usernameInput}/repos`;
    callAPI(urlQuery);

  });
}

function callAPI(url) {
  console.log(url);
  fetch(url)
  .then(response => {
    console.log(response.json());
  })
  .then(repsonseJSON => displayResults(responseJSON))
  .catch( alert("Rugh rough."));
}

function displayResults(userResults) {
    for (let i = 0; i <= responseJSON.length; i++) {
      $('.repo-results').append(`<p>${userResults.id}</p>`);
    }
}
$(eventListener());
