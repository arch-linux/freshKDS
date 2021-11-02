/* This file attempts to manage orders in a sensible way.
orderManager v1.0 - initial
Please submit ideas as a pull request if you can improve this -- your ideas are welcome
 freshKDS - NODEJS
 Last Modified on 1 NOV 2021 by Christopher Allen (arch-linux)
 */

const minblankOrder = {
    "id": "",
    "name": "",
    "time": "",
    "mode": "",
    "items": [
        {
            "name": "",
            "qty": 0,
            "mods": []
        }
    ],
    "terminal": ""
};

const blankItem = {
    "name":"",
    "qty":0,
    "mods":[]
};

function startNewOrder(id,orderName,time,mode,name,qty,mods,terminal,returns){
    if(!(id == undefined || orderName == undefined || time == undefined || mode == undefined || name == undefined || qty == undefined || mods == undefined || terminal == undefined)){
        // all fields are populated.
        var newOrder = minblankOrder;
        newOrder.id = id;
        newOrder.name = orderName;
        newOrder.time = time;
        newOrder.mode = mode;
        newOrder.items[0].qty = qty;
        newOrder.items[0].name = name;
        newOrder.items[0].mods = mods;
        newOrder.terminal = terminal;
        returns(newOrder);
    } else {
        returns(false);
    }
};

function startNewItem(name,qty,mods,returns){
    if(!(name == undefined || qty == undefined || mods == undefined)){
        var newItem = blankItem;
        newItem.name = name;
        newItems.qty = qty;
        newItems.mods = mods;
        returns(newItem);
    } else {
        returns(false);
    }
}

function addItemsToOrder(order,items,returns){
    if(items != undefined && order != undefined){
        var newOrder = order.items.push(items);
        returns(newOrder);
    } else {
        returns(false);
    }
}

function addPickupTime(order,pickupTime,returns){
    if(order != undefined && pickupTime != undefined){
        var newOrder = order;
        newOrder.pickupTime = pickupTime;
        returns(newOrder);
    } else {
        returns(false);
    }
}

function addPhoneNumber(order,phoneNumber,returns){
    if(order != undefined && phoneNumber != undefined){
        var newOrder = order;
        newOrder.phoneNumber = phoneNumber;
        returns(newOrder);
    } else {    
        returns(false);
    }
}

function optInForSMS(order,optIn,returns){
    if(order != undefined && optIn != undefined){
        var newOrder = order;
        newOrder.optInForSms = optIn;
        returns(newOrder);
    } else {
        returns(false);
    }
}

function addDeliveryAddress(order,address,returns){
    if(order != undefined && address == undefined){
        var newOrder = order;
        newOrder.deliveryAddress = address;
    } else {
        returns(false);
    }
}

function addServer(order,server,returns){
    if(order != undefined && server != undefined){
        var newOrder = order;
        newOrder.server = server;
    } else {
        returns(false);
    }
}


function addSource(order,source,returns){
    if(order != undefined && source != undefined){
        var newOrder = order;
        newOrder.source = source;
    } else {
        returns(false);
    }
}

function addSpecialInstructions(order,specialInstructions,returns){
    if(order != undefined && specialInstructions != undefined){
        var newOrder = order;
        newOrder.specialInstructions = specialInstructions;
    } else {
        returns(false);
    }
}

function addCustomerArrivedUrl(order,customerArrivedUrl,returns){
    if(order != undefined && customerArrivedUrl != undefined){
        var newOrder = order;
        newOrder.customerArrivedUrl = customerArrivedUrl;
    } else {
        returns(false);
    }
}

function addVehicleModel(order,vehicleModel,returns){
    if(order != undefined && vehicleModel != undefined){
        var newOrder = order;
        newOrder.vehicleModel = vehicleModel;
    } else {
        returns(false);
    }
}

function addVehicleColor(order,vehicleColor,returns){
    if(order != undefined && vehicleColor != undefined){
        var newOrder = order;
        newOrder.vehicleColor = vehicleColor;
    } else {
        returns(false);
    }
}

function addCosts(order,costs,returns){
    if(order != undefined && costs != undefined){
        var newOrder = order;
        newOrder.costs = costs;
    } else {
        returns(false);
    }
}

function addDeliveryService(order,deliveryService,returns){
    if(order != undefined && deliveryService != undefined){
        var newOrder = order;
        newOrder.deliveryService = deliveryService;
    } else {
        returns(false);
    }
}



module.exports = {
    minblankOrder:minblankOrder,
    blankItem:blankItem,
    startNewOrder:startNewOrder,
    startNewItem:startNewItem,
    addItemsToOrder:addItemsToOrder,
    addPickupTime:addPickupTime,
    addPhoneNumber:addPhoneNumber,
    optInForSMS:optInForSMS,
    addDeliveryAddress:addDeliveryAddress,
    addServer:addServer,
    addSource:addSource,
    addSpecialInstructions:addSpecialInstructions,
    addCustomerArrivedUrl:addCustomerArrivedUrl,
    addVehicleModel:addVehicleModel,
    addVehicleColor:addVehicleColor,
    addCosts:addCosts,
    addDeliveryService:addDeliveryService
}
