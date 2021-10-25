/* This file fetches KDS information from FreshKDS servers.
 freshKDS - NODEJS
 Last Modified on 24 OCT 2021 by Christopher Allen (arch-linux)
 */

  
 var unirest = require('unirest');


 function getKDSinformation(token,response){
    var req = unirest('GET', token.url + '/integrators/kds-information')
    .headers({
      'x-integration-token': token.application_key
    })
    .end(function (res) { 
      if (res.error) throw new Error(res.error); 
      response(res.raw_body);
    });
  
 }

 module.exports = {
    getKDSinformation:getKDSinformation

 };