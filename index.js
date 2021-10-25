<<<<<<< getKDSInformation
<<<<<<< Updated upstream
getKDSLocations
=======
=======
>>>>>>> main
const path = require("path");
var libdir = path.join(__dirname,'/lib/');
var token = require(libdir + 'token.js');
var getKDSLocations = require(libdir + 'getKDSlocations.js');
<<<<<<< getKDSInformation
var getKDSinformation = require(libdir + 'getKDSinformation.js');
=======
>>>>>>> main


module.exports = {
    getKDSLocations:getKDSLocations.getKDSLocations,
<<<<<<< getKDSInformation
    token:token.token,
    getKDSInformation:getKDSinformation.getKDSinformation
}
>>>>>>> Stashed changes
=======
    token:token.token
}
>>>>>>> main
