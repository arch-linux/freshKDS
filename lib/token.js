/* This file manages and stores tokens for later use.
 freshKDS - NODEJS
 Last Modified on 21 OCT 2021 by Christopher Allen (arch-linux)
 */


var url;
var application_key; 

var production = "https://api.payjunction.com";
var test = "https://api.payjunctionlabs.com";
var mode;

var finaltoken;

function token(cmode,capplication_key,tokenReturn){
    if(cmode == "production"){
        url = production;
    } else if(cmode == "test"){
        url = test;
    } else {
        console.error("[freshKDS] unknown token mode: '" + cmode + "'");
    }  
    if(capplication_key != null){
        application_key = capplication_key;
    }
    finaltoken = {url:url,application_key:application_key,mode:mode};
    tokenReturn(finaltoken);
}


 module.exports = {
    token: token
 }

