import {tablo, Routes} from './block/tabloClasses.js';
import {tabloMngr, tabloMngrDraw} from './block/tabloMngr.js';
import {weatherBalloon} from './block/APIfolder/weather.js';
import {imageApi} from './block/APIfolder/photoApi.js';
/**
 * @author chico
 */






 
tabloMngrDraw();
tabloMngr();
tablo.downloadToStorage();
tablo.reDraw(tablo.creatorView, 'newRoutes' );
tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
tablo.addListenerDel();
document.getElementById("save").addEventListener("click", tablo.uploadInStorage);
document.getElementById("addToRout").addEventListener("click", function(){
    tablo.addRoute(tablo.dataArr);
    tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
    tablo.addListenerDel();
});

document.getElementById("routes").addEventListener("keyup", function(){
        if(document.getElementById("routes").value.toLowerCase() == "могилев"){
            weatherBalloon("Могилёв");
            imageApi("Могилёв");
        } else {
            weatherBalloon(document.getElementById("routes").value);
            imageApi(document.getElementById("routes").value);
        };
});
