/* This file sends completed orders to freshKDS
 freshKDS - NODEJS
 Last Modified on 1 NOV 2021 by Christopher Allen (arch-linux)
 */

var unirest = require('unirest');

function sendKDSOrder(token,order,location,device,response){

    if(order != undefined && token != undefined && location != undefined  && device != undefined){
        var req = unirest('POST', token.url + "/integrators/kds-orders/")
        .headers({
          'x-integration-token': token.application_key,
          'x-location-id': location,
          'x-device-ids': device,
          'Content-Type': 'application/json'
        })
        .send(JSON.stringify({order}))
        .end(function (res) { 
          if (res.error) throw new Error(res.error); 
          response(JSON.parse(res.raw_body));
        });

    } else {
        response(false);
    }
   
  
}

module.exports = {
    sendKDSOrder:sendKDSOrder
}