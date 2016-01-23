var json, pic;

function callback(response) {
    json = response;

    console.log(json);
}

$(document).ready(function () {

  $.ajax({
        type: "POST",
        dataType: "jsonp",
        jsonpCallback: "callback",
        url: "data.json",
        crossDomain: true,
        cache: true
    });


});

function start() {
  $(".initial").hide();
  pic = -1;

  next();
}

function next() {
  pic += 1;

  $(".imgbox").hide();
  $(".textbox").hide();

  $("#imgbox").html("<img class='img' src='full/" + pic + ".jpg'>");

  $("#pgname").text(json[pic].pgname);
  $("#pname").text(json[pic].pname);
  $("#year").text(json[pic].year);
  $("#desc").html(json[pic].desc);

  $(".imgbox").fadeIn();
  $(".textbox").fadeIn();

  if (pic == json.length - 1) {
    $("#next").hide();
  }

}

function prev() {
  pic -= 1;

  if (pic >= 0) {
    $(".imgbox").hide();
    $(".textbox").hide();

    $("#imgbox").html("<img class='img' src='full/" + pic + ".jpg'>");

    $("#pgname").text(json[pic].pgname);
    $("#pname").text(json[pic].pname);
    $("#year").text(json[pic].year);
    $("#desc").text(json[pic].desc);

    $(".imgbox").fadeIn();
    $(".textbox").fadeIn();
    $("#next").fadeIn();
  }

  else {
    $(".imgbox").hide();
    $(".textbox").hide();

    $(".initial").fadeIn();
  }
}
