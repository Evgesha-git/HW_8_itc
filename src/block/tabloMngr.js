import {tablo} from './tabloClasses.js';

export function tabloMngrDraw(){
    document.getElementById("infoBlock").innerHTML = `
        <button name="mainTablo" class="tabloButtons">Основное табло</buton>
        <button name="waiting" class="tabloButtons">Ожидают</button>
        <button name="departure" class="tabloButtons">Отправленные</button>
        <button name="favorite" class="tabloButtons">Избранное</button>
        `;
}

export function tabloMngr (){
    let button = document.querySelectorAll('.tabloButtons');
    button.forEach (elem => elem.addEventListener("click", (event) => {
        const {target} = event;
        let date = new Date;
        let workArr = [];
        switch (target.name) {
            case "mainTablo":
                tablo.reDraw(tablo.tabloView(tablo.dataArr), 'info');
                tablo.addListenerDel();
                break;
            case "waiting":
                tablo.dataArr.forEach(elem => {
                    if(new Date(`${elem._date}T${elem._timeToStart}`) > date){
                        workArr.push(elem);
                    }
                });
                tablo.reDraw(tablo.tabloView(workArr), 'info');
                tablo.addListenerDel();
                break;
                case "departure":
                    tablo.dataArr.forEach(elem => {
                        if(new Date(`${elem._date}T${elem._timeToStart}`) < date){
                            workArr.push(elem);
                        }
                    });
                    tablo.reDraw(tablo.tabloView(workArr), 'info');
                    tablo.addListenerDel();
                break;
            case "favorite":
                tablo.dataArr.forEach(elem => {
                    if(elem['_star']){
                        workArr.push(elem);
                    }
                });
                tablo.reDraw(tablo.tabloView(workArr), 'info');
                tablo.addListenerDel();
            break;
        }
    }))
}