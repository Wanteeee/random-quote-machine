
getQuoteFirst()

$("button").on("click", function() {
  getQuote()
})

function getQuoteFirst() {
  $(".content").animate({opacity: 0}, 500)
  $(".author").animate({opacity: 0}, 500)
  changeColor()
  $.ajax({
    headers: {
      "X-Mashape-Key": "S4DCR2kBKZmshL4ZBliyXqd4FNS5p1psMXsjsnGzQmBXKZcPG4",
      Accept: "application/json"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",

    success: function(data) {
      $(".content").toggleClass('special');
      $(".content").text(data.quote)
      $(".author").text("-" + data.author)
      $(".content").animate({opacity: 1}, 500)
      $(".author").animate({opacity: 1}, 500)
      twitter()
    }
  })
  twitter()
}

function getQuote() {
  $(".content").animate({opacity: 0}, 500)
  $(".author").animate({opacity: 0}, 500)
  $.ajax({
    headers: {
      "X-Mashape-Key": "S4DCR2kBKZmshL4ZBliyXqd4FNS5p1psMXsjsnGzQmBXKZcPG4",
      Accept: "application/json"
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1",
    success: function(data) {
      $(".content").text(data.quote)
      $(".author").text("-" + data.author)
      $(".content").animate({opacity: 1}, 500)
      $(".author").animate({opacity: 1}, 500)
      changeColor()
      twitter()
    }
  })

}

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function changeColor() {
  const color = "rgb(" + random(1, 254) + ", " + random(1, 254) + ", " + random(1, 254) + ")"
  $("body").css("background-color", color)
  $("body").css("color", color)
}



function twitter() {
  const content = $(".content").text()
  const author = $(".author").text()
  $("#twitter").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + content + author)
}
