"use strict";// строгий режим
var SiteFactory = require('./SiteFactory');          // подключаю фабрику
const factory = new SiteFactory();                   // создаю объект фабрики
let FactorySite = factory.create('SITE_WORDPRESS');  // сайт на вордпресс
//let FactorySite = factory.create(123);             // тестирую левое значение
//let FactorySite = factory.create();                // тестирую пустое значение
FactorySite.getProduct('https://sdfg.sdfg');         // заглушка
console.log(FactorySite);