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


const productIndex = findProductIndex("flour");
console.log("ProductIndex: ", productIndex)

const productAdded = addProduct({ name: "FLOUR", quantity: 5 });
console.log(productAdded);
console.log("inventory: ", inventory);