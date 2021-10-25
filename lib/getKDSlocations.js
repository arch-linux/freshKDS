/* This file fetches all KDS locations from FreshKDS servers.
 freshKDS - NODEJS
 Last Modified on 24 OCT 2021 by Christopher Allen (arch-linux)
 */
<<<<<<< getKDSInformation

 
=======
>>>>>>> main
 var unirest = require('unirest');


 function getKDSLocations(token,response){
<<<<<<< getKDSInformation
=======
console.log(token.url + "/integrators/kds-information/locations");
>>>>>>> main
    var req = unirest('GET', token.url + '/integrators/kds-information/locations')
    .headers({
      'x-integration-token': token.application_key
    })
    .end(function (res) { 
      if (res.error) throw new Error(res.error); 
      response(res.raw_body);
    });
  
 }

 module.exports = {
    getKDSLocations:getKDSLocations

 };