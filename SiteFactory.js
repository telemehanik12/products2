"use strict";// строгий режим
var types = require('./constants');     // подключаю блок констант
// фабрика 
module.exports = class SiteFactory {
    create (type) {
        let site;
        let inm = false;
        for(let item of types){
            if(item[0] === type){
                site = require(item[2]);
                inm = true;
            }
       }
       if(inm === false){
        site = require(types[0][2]);
       } 
       return new site(type); 
    }
}