/* This file manages and stores tokens for later use.
 freshKDS - NODEJS
 Last Modified on 24 OCT 2021 by Christopher Allen (arch-linux)
 */


var url;
var application_key; 

var production = "https://integrations-api.ftservices.cloud";
var demo = "https://demo-integrations-api.ftservices.cloud";
var mode;

var finaltoken;

function token(cmode,capplication_key,tokenReturn){
    if(cmode == "production"){
        url = production;
        mode = "production";
    } else if(cmode == "demo"){
        url = demo;
        mode = "demo";
    } else {
        console.error("[freshKDS] unknown token mode: '" + cmode + "'");
        mode = "error";
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

