/**
 * @author chico
 */

//import {tablo} from '../tabloClasses.js';

export async function weatherBalloon(cityID) {
    let key = "8643e5fa4d67cb1ad3c160e1d6c66d90";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key + '&lang=ru&units=metric')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        
        let div = document.getElementById("weather");
        div.innerHTML = "";
        div.innerHTML += '<span>' + data.name + '</span><br/><span>Температура: '+data.main.temp+'C<sup>0</sup></span><br/>'+
        '<span>Влажность: '+data.main.humidity+'%</span><br /><span>Погода: '
        +data.weather[0].description+'</span><img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png" class="icon"/>'+printSovet(data.weather[0].main)+
        '<br /><span>Скорость ветра: '+
        data.wind.speed+' м/с</span>';
        
      console.log(data);
      //return div;
    })
    .catch(function() {
      // catch any errors
    });
};


function printSovet (desc){
  switch (desc) {
    case "Fog":
      return ("<br/><span>Захвати противотуманки</span>");
      break;
    case "Thunderstorm":
      return ("<br/><span>Самое время набрать бобольше железа с собой</span>");
      break;
    case "Rain":
      return ("<br/><span>Впрочем зонт стоит захватить</span>");
      break;
    case "Snow":
      return ("<br/><span>Уииии!! Можно слепить снеговика!!</span>");
      break;
    case "Clear":
      return ("<br/><span>Вроде все неплохо даже</span>");
      break;
    default:
      return ("<br/><span>Фантазии не хватило на большее :(</span>");
      break;
  }
}