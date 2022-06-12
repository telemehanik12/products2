"use strict";
/*
module.exports = Object.freeze({
  SITE_DEFAULT    : 'Products on default',                 //
  SITE_WORDPRESS  : 'Products on WordPress',               //
  SITE_SHOPIFY    : 'Products on Shopify',                 // shopify
  SITE_ALIEXPRESS : 'Products on Aliexpress',              // 
  SITE_AMAZON     : 'Products on Amazon',                  //
  SITE_OTHER      : 'Products on other technology site'    // 
});*/
// экспорт массива
let types_of_sites = [
  ['SITE_DEFAULT',    'Products on default',               './othertypesite.class.js'],
  ['SITE_WORDPRESS',  'Products on WordPress',             './wordpress.class.js'],
  ['SITE_SHOPIFY',    'Products on Shopify',               './shopify.class.js'],
  ['SITE_ALIEXPRESS', 'Products on Aliexpress',            './aliexpress.class.js'],
  ['SITE_AMAZON',     'Products on Amazon',                './amazon.class.js'],
  ['SITE_OTHER',      'Products on other technology site', './othertypesite.class.js'],
  ];
/*
const types_sytes = [
    { type: "SITE_DEFAULT",     dstr: 'Products on default',               fileclass: './othertypesite.class.js' },
    { type: "SITE_WORDPRESS",   dstr: 'Products on WordPress',             fileclass: './wordpress.class.js' },
    { type: "SITE_SHOPIFY",     dstr: 'Products on Shopify',               fileclass: './shopify.class.js' },
    { type: "SITE_ALIEXPRESS",  dstr: 'Products on Aliexpress',            fileclass: './aliexpress.class.js'},
    { type: "SITE_AMAZON",      dstr: 'Products on Amazon',                fileclass: './amazon.class.js'},
    { type: "SITE_OTHER",       dstr: 'Products on other technology site', fileclass: './othertypesite.class.js' }
  ];
  

  const find = "SITE_WORDPRESS";
  let site = types_sytes.find(el => el.type = "SITE_WORDPRESS");
  console.log(site)
  if(find){
    site = types_sytes.find(el => el.type = find);
  }
  console.log(site.fileclass);
  */  
  module.exports =  types_of_sites;
