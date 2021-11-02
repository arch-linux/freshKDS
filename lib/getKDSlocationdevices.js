/* This file fetches all KDS devices at a location.
 freshKDS - NODEJS
 Last Modified on 1 NOV 2021 by Christopher Allen (arch-linux)
 */

 var unirest = require('unirest');

 function getKDSLocationDevices(token,location,response){
    var req = unirest('GET', token.url + '/integrators/kds-information/locations/' + location + "/devices/")
    .headers({
      'x-integration-token': token.application_key
    })
    .end(function (res) { 
      if (res.error) throw new Error(res.error); 
      response(res.raw_body);
    });
  
 }

 module.exports = {
    getKDSLocationDevices:getKDSLocationDevices

 };