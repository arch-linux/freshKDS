/* This file fetches all active orders on specified device(s).
device field can be "all" to fetch orders from all devices.
 freshKDS - NODEJS
 Last Modified on 1 NOV 2021 by Christopher Allen (arch-linux)
 */

 var unirest = require('unirest');

 function getKDSActiveOrders(token,location,device,response){
    var req = unirest('GET', token.url + '/integrators/kds-orders/active')
    .headers({
      'x-integration-token': token.application_key,
      'x-location-id': location,
      'x-device-ids': device
    })
    .end(function (res) { 
      if (res.error) throw new Error(res.error); 
      response(JSON.parse(res.raw_body));
    });
  
 }


 module.exports = {
    getKDSActiveOrders:getKDSActiveOrders

 };