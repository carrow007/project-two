window.onload = function () {

var dropDown     = document.getElementById('dropdown');
// var radioBtn     = document.getElementById('radio-button');
var goButton     = document.getElementById('goButton');
var favButton    = document.getElementById('fav-button');
var viewALl      = document.getElementById('view-all');
var deleteFavs   = document.getElementById('delete-favs');
var chosenDropDown = document.querySelector('#dropdown');
var chosenRadio    = document.querySelector('#topRadio');

var endPointUrl       = "https://newsapi.org/v1/articles"
var sourceQuery       = "?source=" + chosenDropDown.value;
var sortQuery         = "&sortBy" + chosenRadio.value;
var apiPublicKeyQuery = "&apiKey=" + NEWS_API_KEY;
var fullQuery         = endPointUrl + sourceQuery + sortQuery + apiPublicKeyQuery;

  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();

    // var chosenDropDown = document.querySelector('#dropdown');
    var chosenRadio    = document.querySelector('#topRadio');
    console.log(chosenDropDown.value)
      if (chosenDropDown.value == 'bbcnews' && chosenRadio.value == 'top') {
          console.log('is this working?')



  $.ajax({
    url: fullQuery
      }).done(function(response) {
      console.log("response: ", response);
   });
  };
  });
};
