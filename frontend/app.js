window.onload = function () {

var dropDown     = document.getElementById('dropdown');
var goButton     = document.getElementById('goButton');
// var favButton    = document.createElement('button');
// favButton.className = 'faves'
var viewALl      = document.getElementById('view-all');
var deleteFavs   = document.getElementById('delete-favs');
var chosenDropDown = document.getElementById('dropdown');

var articleAddToFaves = '';
var url = 'http://localhost:3000';


    function displayContent(response) {
             // Looping to create the div cards and appending to the DOM
          var newsContent = document.getElementById('newsContainer');

            var articlesArr = response.articles
          for(var i = 0; i < articlesArr.length; i++) {
            console.log(articlesArr.length)

          var newsCards = document.createElement('div')
          newsCards.className = 'newsCardsC'

          var authorText = 'Author:' + articlesArr[i].author;
          var authorDiv = document.createElement('div');
          authorDiv.className = 'authorC';
          authorDiv.appendChild(document.createTextNode(authorText));
          newsCards.appendChild(authorDiv);

          var descriptionText = 'Description:' + articlesArr[i].description;
          var descriptionDiv = document.createElement('div');
          descriptionDiv.className = 'descriptionC';
          descriptionDiv.appendChild(document.createTextNode(descriptionText));
          newsCards.appendChild(descriptionDiv);

          var titleText = 'Title:' + articlesArr[i].title;
          var titleDiv = document.createElement('div');
          titleDiv.className ='titleC';
          titleDiv.appendChild(document.createTextNode(titleText));
          newsCards.appendChild(titleDiv);

          var urlText = 'Link:' + articlesArr[i].url;
          var urlDiv = document.createElement('div');
          urlDiv.className ='urlC';
          urlDiv.appendChild(document.createTextNode(urlText));
          newsCards.appendChild(urlDiv);

          var urlToImageText ='<img class= "picture" src ="' + articlesArr[i].urlToImage + '"/>';
          var urlToImageDiv = document.createElement('div');
          urlToImageDiv.className ='imageC';
          urlToImageDiv.innerHTML = urlToImageText
          newsCards.appendChild(urlToImageDiv);


          // var favButton    = document.createElement('button');
          // favButton.className = 'favs'
          // newsCards.appendChild(favButton)

          newsContent.appendChild(newsCards)




          }
        }



//// clicking
  document.getElementById('goButton').addEventListener('click', function () {
    event.preventDefault();


    var chosenRadio    = document.querySelector('.news-radio:checked');
      console.log(chosenRadio)
    var endPointUrl       = "https://newsapi.org/v1/articles"
    var sourceQuery       = "?source=" + chosenDropDown.value;
    var sortQuery         = "&sortBy=" + chosenRadio.value;
       console.log(chosenRadio.value)
    var apiPublicKeyQuery = "&apiKey=" + NEWS_API_KEY;
    var fullQuery         = endPointUrl + sourceQuery + sortQuery + apiPublicKeyQuery;


      if (chosenDropDown.value == 'bbcnews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
          console.log(fullQuery)
          // if (ERROR) {
          // handleError(res, err.message, "Failed to get selection.");
          // } else {
          // res.status(200).json(docs);
          // }


      $.ajax({
        url: fullQuery
          }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        });

      } else if (chosenDropDown.value == 'bbcsport' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log("choices")

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })

      } else if (chosenDropDown.value == 'bloomberg' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })

      } else if (chosenDropDown.value == 'buzzfeed' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'cnbc' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'cnn' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'espn' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'googlenews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'hackernews' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'independent' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'mashable' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'recode' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'redditrall' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'reuters' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'techcrunch' && (chosenRadio.value == 'top' || chosenRadio.value == 'latest' || chosenRadio.value == 'popular')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'theguardianuk' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thehuffingtonpost' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thenewyorktimes' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thenextweb' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'theverge' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thewallstreetjournal' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      } else if (chosenDropDown.value == 'thewashingtonpost' && (chosenRadio.value == 'top' || chosenRadio.value == 'popular' || chosenRadio.value == 'latest')) {
        console.log('.news-radio:checked')

        $.ajax({
          url: fullQuery
        }).done(function(response) {
          console.log("response: ", response);
          displayContent(response);
        })
      }
  });

  document.getElementById('favesButton').addEventListener('click', function() {
    console.log('faves btn clicked');

    var data = {
      name: articleAddToFaves
    };
    console.log(data);
    // post:
    $.ajax({
      url: url + '/articles/new',
      method: 'POST',
      data: data,
      dataType: 'json'
    }).done(function(response) {
      console.log( "response: ", response );
    }); // end post
  }); // end add to faves btn
};
