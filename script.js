'use strict';

const url = "https://api.github.com/users/";

function eventListener() {
  $('.search-form').submit(event => {
    event.preventDefault();
    $('.repo-results').empty();
    let usernameInput = $('#user-search-input').val();
    let urlQuery = url + `${usernameInput}/repos`;
    callAPI(urlQuery);
  });
}

function callAPI(url) {
  const options = {
    headers: new Headers({
      'username': 'https://api.github.com',
      'Accept': 'application/vnd.github.v3+json'
    })
  }

  fetch(url)
  .then( function(response) {
    if (response.ok) {
      return response.json();
    }
    alert("Looks like I couldnt find a user by that name. Try again.");
    throw new Error(response.statusText);
  })
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert("Rugh rough."));
}

function displayResults(userResults) {

    for (let i = 0; i < userResults.length; i++) {
      $('.repo-results').append(`<p><span class="repo-name">Repo Name:</span> <span>${userResults[i].name}</span><br/> <span class="url-label">URL: </span><span class="url">${userResults[i].owner.url}</span></p>`);
    }
}
$(eventListener());
