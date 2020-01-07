/**
 * @author chico
 */

import {tablo} from '../tabloClasses.js';

export async function imageApi( cityID ) {
    let div = document.getElementById("photo");
    let key = "2ae7aef477a9ec5f1b33c4c40332de7f";
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+cityID+'&per_page=10&page=1&format=json&nojsoncallback=1')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        
        let srcPhoto = 'https://farm'+data.photos.photo[1].farm+'.staticflickr.com/'+data.photos.photo[1].server+'/'+data.photos.photo[1].id+'_'+data.photos.photo[1].secret+'.jpg';
        div.style.backgroundImage = `url(${srcPhoto})`;
      //console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }