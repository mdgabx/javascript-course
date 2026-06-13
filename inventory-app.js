const inventory = [{ name: "FLOUR", quantity: 5 }];

function findProductIndex(name) {
  let productName = name.toLowerCase();

  if (inventory.length == 0) {
    return -1;
  }

  for (let i = 0; i < inventory.length; i++) {
    console.log(i);

    if (inventory[i] === name.toLowerCase()) {
      return i;
    } else {
      return -1;
    }
  }
}

function addProduct(productObj) {
  let productsArr = [];

  // check if inventory is equal to empty array

  if(inventory.length !== 0) {
    for(let i = 0; i < inventory.length; i++){
      const product = inventory[i];
      console.log(productObj["name"].toLowerCase())

      if( 
        productObj["name"].toLowerCase() === 
        product["name"].toLowerCase()) 
      {
        console.log("match")
      }

    }

   
  } else {
    const { name, quantity } = productObj;

     productsArr.push({ 
      name: name.toLowerCase(),
      quantity
    });
  }


  // for (let i = 0; i <= inventory.length; i++) {
  
  //   if(inventory[i].hasOwnProperty("name")){

  //   }

  //   if (inventory[i] !== productObj) {
  //     const { name, quantity } = productObj;

  //     productsArr.push({
  //       name: name.toLowerCase(),
  //       quantity: quantity
  //     });

  //   } else {
  //     inventory[i].quantity = productObj.quantity;
  //   }
  // }

  console.log(productsArr);
}

// console.log(findProductIndex("flour"));
console.log(addProduct({ name: "FLOUR", quantity: 5 }))