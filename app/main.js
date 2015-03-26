function getJSONP(url, cbName){
  var $script = document.createElement('script');
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}

function myAwesomeFunction(data){
  var weather = data;
  var $target = document.getElementById("target");
  addItemToList($target, weather);
}

function addItemToList($list, item){
    console.log(item)
    $list.innerHTML= "";
    for (i = 0; i < 5; i++) {
        var $li = document.createElement("li");
        var $icon = document.createElement("img");
        var $high = document.createElement("p");
        var $low = document.createElement("p");
        var $day = document.createElement("p");
        $li.innerHTML = item.forecast.simpleforecast.forecastday[0].avehumidity;
        $list.appendChild($li);
        $icon.src = item.forecast.simpleforecast.forecastday[i].icon_url;
        $high.innerHTML = item.forecast.simpleforecast.forecastday[i].high.fahrenheit;
        $low.innerHTML = item.forecast.simpleforecast.forecastday[i].low.fahrenheit;
        $day.innerHTML = item.forecast.simpleforecast.forecastday[i].date.weekday;
        $li.appendChild($day);
        $li.appendChild($icon);
        $li.appendChild($high);
        $li.appendChild($low);
        $list.appendChild($li);
    }
   $li.innerHTML = item.forcast;
   $list.appendChild($li);
}

document.addEventListener("DOMContentLoaded", function(){
  getJSONP('https://api.wunderground.com/api/afd7642ae83736bc/forecast10day/q/37217.json', "myAwesomeFunction");
  var $form = document.getElementById("zipcodeform");
  $form.addEventListener("submit", function(event){
    event.preventDefault();
    var $numb = $form.querySelector("input[type='number']").value;
    console.log($numb);
    var newUrl = "https://api.wunderground.com/api/afd7642ae83736bc/forecast10day/q/"+ $numb + ".json";
    console.log(newUrl);
    getJSONP(newUrl, "myAwesomeFunction");
  });
});
