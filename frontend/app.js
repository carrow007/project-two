window.onload = function () {

var dropDown     = document.getElementById('dropdown');
var goButton     = document.getElementById('goButton');
var favButton    = document.getElementById('fav-button');
var viewALl      = document.getElementById('view-all');
var deleteFavs   = document.getElementById('delete-favs');
var chosenDropDown = document.querySelector('#dropdown');
var chosenRadio    = document.querySelector('.news-radio');

  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();

    var endPointUrl       = "https://newsapi.org/v1/articles"
    var sourceQuery       = "?source=" + chosenDropDown.value;
    var sortQuery         = "&sortBy" + chosenRadio.value;
    var apiPublicKeyQuery = "&apiKey=" + NEWS_API_KEY;
    var fullQuery         = endPointUrl + sourceQuery + sortQuery + apiPublicKeyQuery;


    console.log(chosenDropDown.value)
      if (chosenDropDown.value == 'bbcnews' && chosenRadio.value == 'top') {
          console.log('is this working?')



      $.ajax({
        url: fullQuery
          }).done(function(response) {
          console.log("response: ", response);
       });

      } else if (chosenDropDown.value == 'bbcsport' && chosenRadio.value == 'top') {
        console.log("choices")

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })

      } else if (chosenDropDown.value == 'bloomberg' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })

      } else if (chosenDropDown.value == 'buzzfeed' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'cnbc' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'cnn' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'espn' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'googlenews' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'hackernews' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'independent' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'mashable' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'recode' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'redditall' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'reuters' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'techcrunch' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'theguardianuk' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thehuffingtonpost' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thenewyorktimes' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thenextweb' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'theverge' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thewallstreetjournal' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thewashingtonpost' && chosenRadio.value == 'top') {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      }
  });
};
