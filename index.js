const path = require("path");
var libdir = path.join(__dirname,'/lib/');
var token = require(libdir + 'token.js');
var getKDSLocations = require(libdir + 'getKDSlocations.js');
var getKDSinformation = require(libdir + 'getKDSinformation.js');
var getKDSLocationDevices = require(libdir + 'getKDSLocationDevices.js');
var getKDSActiveOrders = require(libdir + 'getKDSActiveOrders.js');
var orderManager = require(libdir + 'orderManager.js');
var sendKDSOrder = require(libdir + 'sendKDSOrder.js');


module.exports = {
    getKDSLocations:getKDSLocations.getKDSLocations,
    token:token.token,
    getKDSLocationDevices:getKDSLocationDevices.getKDSLocationDevices,
    getKDSinformation:getKDSinformation.getKDSinformation,
    getKDSActiveOrders:getKDSActiveOrders.getKDSActiveOrders,
    sendKDSOrder:sendKDSOrder.sendKDSOrder,
    orderManager:orderManager
}

