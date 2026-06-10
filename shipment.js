/* 
Build a Smart Pantry Restocker

In this lab, you will build a small pantry management program using basic JavaScript concepts like arrays, objects, loops, and conditionals.

You will simulate receiving a shipment of pantry items, deciding what to do with each item, and organizing the results for storage.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

The rawData array contains pipe-separated strings with the format sku|name|qty|expires|zone, where zone is optional. For example:

const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

User Stories:

    You should implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.
        Duplicate sku values in the shipment should be ignored.
        When the zone segment is not provided, it should default to "general".
        The qty value should be converted to a number.

    You should implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.

    The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).
        If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.
        Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".
        Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".

    You should implement a groupByZone(actions) function that groups the actions into storage zones based on each item’s zone property.

    You should implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.

    You should use all of the functions together to process a shipment and log the final grouped result object to the console.


*/

const rawData = [
  "A10|Tomatoes|5|2027-01-01",        // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry",     // zone: "pantry"
];

const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 2, expires: "2026-12-01", zone: "general" },
  { sku: "B21", name: "Bananas", qty: 5, expires: "2026-11-15", zone: "fridge" },
  { sku: "C32", name: "Eggs", qty: 1, expires: "2026-10-30", zone: "pantry" },
];

function parseShipment(rawData) {
  let results = [];
  let seenSkus = [];

  // loop the rawData array 
  for(let i = 0; i  < rawData.length; i++) {
    const item = rawData[i].split("|");
    const sku = item[0];

    // check duplicate sku
    if(seenSkus.includes(sku)) {
      continue;
    }

    seenSkus.push(sku);

    const obj = {
        sku: item[0],
        name: item[1],
        qty: parseInt(item[2]),
        expires: item[3],
        zone: item[4] || "general"
    }

    results.push(obj);
  }  
  return results;
}

function planRestock(pantry, shipment) {
  let actions = [];

  for(let i = 0; i < shipment.length; i++) { 
    const item = shipment[i];
    let action = {};
    let foundInPantry = false;

    for(let j = 0; j < pantry.length; j++) {
      if(shipment[i].sku === pantry[j].sku) {
        foundInPantry = true;
        break;
      }
    }

    if (item.qty <= 0) {
      action = { type: "discard", item: item };
    } else if (foundInPantry) {
      action = { type: "restock", item: item };
    } else {
      action = { type: "donate", item: item };
    }

    actions.push(action);

  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for(let i = 0; i < actions.length; i++) {
    if(grouped[actions[i].item.zone] === undefined) {
      grouped[actions[i].item.zone] = [];
    }

    grouped[actions[i].item.zone].push(actions[i])
  }

 return grouped;
}

function clonePantry(pantry) {
  const clone = [];

  for (let i = 0; i < pantry.length; i++) {
    const item = pantry[i];
    const clonedItem = {
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone
    };
    clone.push(clonedItem);
  }

  return clone;
}

const shipment = parseShipment(rawData);
const clone = clonePantry(pantry);
const actions = planRestock(clone, shipment);
const grouped = groupByZone(actions);
console.log(grouped);