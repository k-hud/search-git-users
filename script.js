'use strict';

const url = "https://api.github.com/users/";
// :username/repos - is endpoint


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
  };
  console.log(url, options);
  fetch(url)
  .then(response => response.json())
  .then(responseJson => displayResults(responseJson))
  .catch(error => alert("Rugh rough."));
}

function displayResults(userResults) {
    console.log("We made it to display!")
    for (let i = 0; i < userResults.length; i++) {
      $('.repo-results').append(`<p><span class="repo-name">Repo Name:</span> <span>${userResults[i].name}</span><br/> <span class="url-label">URL: </span><span class="url">${userResults[i].owner.url}</span></p>`);
    }
}
$(eventListener());
