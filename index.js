const path = require("path");
var libdir = path.join(__dirname,'/lib/');
var token = require(libdir + 'token.js');
var getKDSLocations = require(libdir + 'getKDSlocations.js');
var getKDSinformation = require(libdir + 'getKDSinformation.js');


module.exports = {
    getKDSLocations:getKDSLocations.getKDSLocations,
    token:token.token,
    getKDSInformation:getKDSinformation.getKDSinformation
}

