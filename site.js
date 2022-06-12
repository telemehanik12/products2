"use strict";// строгий режим
// Общий класс сайта
module.exports = class Site {
    type = "SITE_OTHER";
    static displayName = "Site ";
    //конструктор
    constructor(type){
        this.type = type;
    }

    getProduct(url){
        console.log(this.type + ' parse URL - ' + url);
    }
 
}  
