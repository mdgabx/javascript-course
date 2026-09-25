const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

const checkoutDevice = (ledger, assetTag, borrower) => {
  const cloneLedger = JSON.parse(JSON.stringify(ledger));

  let confirmationString = "";

  if (cloneLedger[assetTag] && cloneLedger[assetTag]["status"] !== "CheckedOut") {
    cloneLedger[assetTag]["borrower"] = borrower;
    cloneLedger[assetTag]["status"] = "CheckedOut";

    confirmationString = `${borrower["name"]} has checkout ${assetTag}`;
  } else if (cloneLedger[assetTag] && cloneLedger[assetTag]["status"] === "CheckedOut") {
    confirmationString = `${assetTag} has checked out`;
  } 
  else {
    confirmationString = `${assetTag} is not found`;
  }

  return {
    ledger: cloneLedger,
    message: confirmationString
  }
}

const checkinDevice = (ledger, assetTag) => {
  const cloneLedger = JSON.parse(JSON.stringify(ledger));

  let confirmationString = "";

  if(!cloneLedger[assetTag]) {
    confirmationString = `${assetTag} is not found`;
  } else {
    cloneLedger[assetTag]["borrower"]["name"] = "";
    cloneLedger[assetTag]["borrower"]["email"] = "";
    cloneLedger[assetTag]["dueDate"] = "";
    cloneLedger[assetTag]["status"] = "CheckedIn";

    confirmationString = `${assetTag} has check in`;
  }

  return {
    ledger: cloneLedger,
    message: confirmationString
  }
}


const listOverdueDevices = () => {

}

const serializeLedger = () => {

}

const loadLedger = () => {

}


