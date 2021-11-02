<h1 align="center">
    <img src="logo.svg" alt="Logo" width="125" height="125">
  </a>
</h1>

<div align="center">
  Seemless KDS integration for your next kitchen project!
  <br />
  <br />
  <a href="https://github.com/arch-linux/freshKDS/issues/new?assignees=arch-linux&labels=triage&template=bug_report.md&title=">Report a Bug</a>
  ·
  <a href="https://github.com/arch-linux/freshKDS/issues/new?assignees=&labels=&template=feature_request.md&title=">Request a Feature</a>
</div>

<div align="center">
<br />
</div>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
    


# freshKDS
 FreshKDS implementation in Node.JS.
 </br>This plugin was built on the documentaton from [FreshKDS Developer Documentation](https://integration-docs.ftservices.cloud/#introduction)
 </br>The author of this software is not affiliated with FreshKDS or its associates in any way.

# NPM
https://www.npmjs.com/package/freshkds
```
npm install freshkds
```

# Import
```
var freshKDS = require("freshkds");
```

# Token Based Methods
Before running any functions you need to create a new token to pass later.
freshKDS.token requires three parameters,

1. demo or production
2. Your API key
3. Return method in which you will store your token for later use.

```
var freshKDS = require("freshkds");
var token;
freshKDS.token("demo",APIKEY,(returns) => {
    token = returns;
});
```


# Get KDS Information
This method will return any valid KDS devices and associated ID's
You will need to pass your token as previously mentioned

```
freshKDS.token(token,(returns) => {});

```

# Get KDS Locations
This method will return a list of all locations.
Same situation! Pass your token like before

```
freshKDS.getKDSLocations(token,(response) => {});
```

# Get KDS Location Devices
Returns all devices at a location.
Along with your token, you also need to pass a location ID to this method.

```
freshKDS.getKDSLocationDevices(token,location,response){});
 
```

# Get all active orders!
Returns all active orders by location and (optionally) device
If you would like to get all devices at a location, pass "all" in your device parameter instead of a device ID.

```
freshKDS.getKDSActiveOrders(token,location,device,(response)=>{});
 
```

# Order Managmenet
This (WIP) order managment will help you establish order objects instead of manually coding for them.
If you would like to manually code these, please follow the documentation at [Send-KDS-Order](https://integration-docs.ftservices.cloud/#send-kds-order)

All order management functions are provided under a subpackage freshKDS.orderManager.*

The bare minimum for an order to be processed through FreshKDS is in the "Start Order Function"
### Start new order

```
freshKDS.orderManager.startNewOrder(id,orderName,time,mode,name,qty,mods,terminal,(returns) => {
  console.log(returns);
});
```

The parameters are as follows
1. ID (Self generated, UNIQUE, Integer) EX: 001
2. orderName (Customer Name or External Order Number, String) Ex: John Smith
3. DateTime of Order (ISO 8601 FORMAT, STRING/DATETIME OBJECT) I recomend using Moment.JS to generate these [Info](https://stackoverflow.com/questions/25725019/how-do-i-format-a-date-as-iso-8601-in-moment-js)
4. Mode of Order -- Accepts one of the Following (For Here, ToGo, Pickup, DriveThru, Delivery, CurbSide) (STRING)
5. Name of Item (First item in order), follow next function to add more items to this order. (STRING) Ex: Large Expresso
6. Quantity of Items (First item in order) EX: 1
7. Modifications of order, if none use [] **IN ARRAY FORMAT** (ARRAY) Ex: ["No Whip Cream"].
8. Terminal ID See "Get KDS Location Devices" (STRING)


The following additional and optional functions are avaible for order managmenet 
All of the following can be reviewed [here](https://integration-docs.ftservices.cloud/#send-kds-order)

```
freshKDS.orderManager.startNewItem(name,qty,mods,returns){}; // creates a new item object
freshKDS.orderManager.addItemsToOrder(order,items,returns){}; // adds item object to order
freshKDS.orderManager.addPickupTime(order,pickupTime,returns){}; // adds phone number to order
freshKDS.orderManager.optInForSMS(order,optIn,returns){}; // adds SMS messaging provided by freshKDS
freshKDS.orderManager.addDeliveryAddress(order,address,returns){}; // adds a delivery address
freshKDS.orderManager.addServer(order,server,returns){}; // adds a server name to an order
freshKDS.orderManager.addSource(order,source,returns){}; // adds a source to an order
freshKDS.orderManager.addSpecialInstructions(order,specialInstructions,returns){}; // adds special instructions to an order
freshKDS.orderManager.addCustomerArrivedUrl(order,customerArrivedUrl,returns){}; // adds customer arrived url instructions to an order
freshKDS.orderManager.freshKDS.orderManager.addVehicleModel(order,vehicleModel,returns){}; // adds vehicle info to order
freshKDS.orderManager.addVehicleColor(order,vehicleColor,returns){}; // adds vehicle color to an order
freshKDS.orderManager.addCosts(order,costs,returns){}; // adds unit costs to an order
freshKDS.orderManager.addDeliveryService(order,deliveryService,returns){}; // adds delivery service information to an order

```
