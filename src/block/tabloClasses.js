/**
 * @author chico
 */

export let tablo = {
    'creatorView':`

        <span class="item_a_a">Транспорт</span>
        <span class="item_b_a">Дата отправления</span>
        <span class="item_c_a">Город прибытия</span>
        <span class="item_d_a">Время отправления</span>
        <span class="item_e_a">Время прибытия</span>
        <span class="item_f_a">Цена проезда</span>

        <select name="typeTrans" class="select item_a_b" id="typeTrans">
                <option value="train">Поезд</option>
                <option value="bus">Автобус</option>
                <option value="taxi">Такси</option>
                <option value="pashiy">Пеший поход</option>
                <option value="horse">Лошадь</option>
            </select>
            <input type="date" class="date item_b_b" id="date" />
            <input type="text" class="select item_c_b" id="routes" />
            <input type="time" class="time item_d_b" id="timeToStart" />
            <input type="time" class="time item_e_b" id="timeToEnd" />
            <input type="number" class="price item_f_b" id="price" />
            <div class="item_h_b"><input type="checkbox" id="star" class="starChck"/><label for="star" class="css-label dark-plus-orange">Добавить в избранное</label></div>
            <div class="item_g_b">
                <input type="button" id="addToRout" class="buttons" value="Добавить путь"/>
                <input type="button" id="save" class="buttons" value="Сохраньть данные"/>
            </div>
         </div>`,
        
        'tabloView':(arr)=>{
            
            let arrResult = `<!--<br />-->
                <div class="routeBlock">
                    <div class="route"><span>Избранное</span></div>
                    <div class="route"><span>Транспорт</span></div>
                    <div class="route"><span>Дата отправления</span></div>
                    <div class="route"><span>Место прибытия</span></div>
                    <div class="route"><span>Время отправления</span></div>
                    <div class="route"><span>Время прибытия</span></div>
                    <div class="route"><span>Стоимость</span></div>
                    <div class="route"><span>Удалить маршрут</span></div>
                </div>`;
            
            for(let i = 0; i < arr.length ; i++){
                let fav;
                if(arr[i]._star == true){
                    fav = "checked"
                }
                //let weather = weatherBalloon(arr[i]._routes, i);
                arrResult += `<!--<br />-->
                
                <div id="routeId${i}" class="routeBlock">
                    <div class="route star"><input id="star" class="starChck" type="checkbox" ${fav}/><label  class="css-label dark-plus-orange"></slabel></div>
                    <div class="route"><span>${arr[i]._typeTrans}</span></div>
                    <div class="route"><span>${arr[i]._date}</span></div>
                    <div class="route"><span>${arr[i]._routes}</span></div>
                    <div class="route"><span>${arr[i]._timeToStart}</span></div>
                    <div class="route"><span>${arr[i]._timeToEnd}</span></div>
                    <div class="route"><span>${arr[i]._price} руб.</span></div>
                    <div class="route"><button id="delBtn${i}" class="buttonsDel">Удалить</button></div>
                </div>`  
            }
            return arrResult;
        },
        
        'dataArr': [],
        
        'reDraw':(viev, weareId) => {
            document.getElementById(weareId).innerHTML = viev;
            
        },
        
        'downloadToStorage': ()=>{
            if(localStorage.getItem('tablo.dataArr')){
                tablo.dataArr = JSON.parse(localStorage.getItem('tablo.dataArr'));
            };
        },
        
        'uploadInStorage':()=>{
            let saveTablo = JSON.stringify(tablo.dataArr);
            localStorage.setItem('tablo.dataArr', saveTablo);
        },
        
        'addRoute':() => {
            let nType = document.getElementById("typeTrans").options.selectedIndex;
            typeTrans = document.getElementById("typeTrans").options[nType].text;
            date = document.getElementById("date").value;
            /*let nRoute = document.getElementById("routes").options.selectedIndex;
            routes = document.getElementById("routes").options[nRoute].text;*/
            routes = document.getElementById("routes").value;
            timeToStart = document.getElementById("timeToStart").value;
            timeToEnd = document.getElementById("timeToEnd").value;
            price = document.getElementById("price").value;
            star = document.getElementById("star").checked;
            tablo.dataArr[tablo.dataArr.length] = new Routes(typeTrans, date, routes, timeToStart, timeToEnd, price, star);
            if(!(typeTrans && date && routes && timeToStart && timeToEnd && price)){
                tablo.dataArr.splice([tablo.datArr.length-1],1);
            };
        },
        
        'removeRoute':(i)=>{
            tablo.dataArr.splice(i,1);
            tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
            tablo.addListenerDel();
        },
        
        'addListenerDel':() => {
            for(let i=0; i<tablo.dataArr.length; i++){
                document.getElementById("delBtn"+i).addEventListener("click", function(){tablo.removeRoute(i)});
            };
        }
}

export class Routes{
    constructor(typeTrans, date, routes, timeToStart, timeToEnd, price, star){
        this.typeTrans = typeTrans;
        this.date = date;
        this.routes = routes;
        this.timeToStart = timeToStart;
        this.timeToEnd = timeToEnd;
        this.price = price;
        this.star = star;
    };
    
    get typeTrans(){
        return this._typeTrans;
    };
    set typeTrans(value){
        if(value.length == 0){
            alert("Укажите тип транспорта");
            return;
        } else {
            this._typeTrans = value;
        };
    };
    
    get date(){
        return this._date;
    };
    set date(value){
        if(value.length == 0){
            alert("Укажите дату отправления");
            return;
        } else {
            this._date = value;
        };
    };
    
    get routes(){
        return this._routes;
    };
    set routes(value){
        if(value.length == 0){
            alert("Укажите маршрут");
            return;
        } else {
            this._routes = value;
        };
    };
    
    get timeToStart(){
        return this._timeToStart;
    };
    set timeToStart(value){
        if(value.length == 0){
            alert("Укажите время отправления");
            return;
        } else {
            this._timeToStart = value;
        };
    };
    
    get timeToEnd(){
        return this._timeToStart;
    };
    set timeToEnd(value){
        if(value.length == 0){
            alert("Укажите время прибытия");
            return;
        } else {
            this._timeToEnd = value;
        };
    };
    
    get price(){
        return this._price;
    };
    set price(value){
        if(value.length == 0){
            alert("Укажите цену");
            return;
        } else {
            this._price = value;
        };
    };
    
    get star(){
        return thid._star;
    };
    set star(value){
        if(value !== true && value !== false){
            alert(error(star));
            return;
        } else {
            this._star = value;
        };
    };
};