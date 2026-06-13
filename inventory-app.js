// const inventory = [{ name: "flour", quantity: 1 }];
const inventory = [];

function findProductIndex(name) {
  let productName = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == productName) {
      return i;
    }
  }

  return -1;
}


function addProduct(productObj) {
  const itemName = productObj["name"].toLowerCase();
  const quantity = productObj["quantity"]
  const index = findProductIndex(itemName);

  if (index === -1) {
    inventory.push({
      name: itemName,
      quantity: quantity
    });

    console.log(itemName + " added to inventory");
  } else {
    inventory[index]["quantity"] += quantity;
    console.log(itemName + " quantity updated");
  }
}

function removeProduct(name, quantity) {
  const itemName = name.toLowerCase();
  const foundIndex = findProductIndex(itemName);
  const itemObject = inventory[foundIndex];

  if (foundIndex === -1) {
    console.log(itemName + " not found");
  } else {

    if(itemObject["quantity"] < quantity) {
      console.log(`Not enough ${itemName} available, remaining pieces: ${itemObject["quantity"]}`);
      return
    }

    itemObject["quantity"] -= quantity;

    if(itemObject["quantity"] <= 0) {
      inventory.splice(foundIndex, 1);
    } 

    console.log("Remaining " + itemName + " pieces: " + itemObject["quantity"]);
  }
}

const productIndex = findProductIndex("flour");
const productAdded = addProduct({name: "flour", quantity: 5});
const productRemove = removeProduct("FLOUR", 10);
console.log(productRemove);
console.log("inventory: ", inventory);
