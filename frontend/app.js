window.onload = function () {

var dropDown     = document.getElementById('dropdown');
var goButton     = document.getElementById('goButton');
var favButton    = document.getElementById('fav-button');
var viewALl      = document.getElementById('view-all');
var deleteFavs   = document.getElementById('delete-favs');
var chosenDropDown = document.querySelector('#dropdown');

  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();
    var chosenRadio    = document.querySelector('.news-radio:checked');
      console.log(chosenRadio)
    var endPointUrl       = "https://newsapi.org/v1/articles"
    var sourceQuery       = "?source=" + chosenDropDown.value;
    var sortQuery         = "&sortBy" + chosenRadio.value;
       console.log(chosenRadio.value)
    var apiPublicKeyQuery = "&apiKey=" + NEWS_API_KEY;
    var fullQuery         = endPointUrl + sourceQuery + sortQuery + apiPublicKeyQuery;


      if (chosenDropDown.value == 'bbcnews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
          console.log('is this working?')



      $.ajax({
        url: fullQuery
          }).done(function(response) {
          console.log("response: ", response);
          // var articles = articles[0]
          // for (i = 0; i < articles.length; i++) {

          // }



       });

      } else if (chosenDropDown.value == 'bbcsport' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log("choices")

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })

      } else if (chosenDropDown.value == 'bloomberg' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })

      } else if (chosenDropDown.value == 'buzzfeed' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'cnbc' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'cnn' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'espn' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'googlenews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'hackernews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'independent' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'mashable' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'recode' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'redditrall' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'reuters' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'techcrunch' && (chosenRadio.value == 'top' || chosenRadio.value == 'latest' || chosenRadio.value == 'popular')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'theguardianuk' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thehuffingtonpost' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thenewyorktimes' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thenextweb' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'theverge' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thewallstreetjournal' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      } else if (chosenDropDown.value == 'thewashingtonpost' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
        })
      }
  });
};
