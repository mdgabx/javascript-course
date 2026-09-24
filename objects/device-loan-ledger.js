const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

const checkoutDevice = (ledger, assetTag, borrower) => {
  const cloneLedger = JSON.parse(JSON.stringify(ledger)); // cloning the equipment ledger

  let confirmationString = "";

  if (cloneLedger[assetTag]) {
    cloneLedger[assetTag]["borrower"] = borrower;
    cloneLedger[assetTag]["status"] = "CheckedOut";

    // setting the confirmation message
    confirmationString = `${borrower["name"]} has checkout ${assetTag}`;
  } else {
    confirmationString = `${assetTag} is not found`;
  }

  return {
    ledger: cloneLedger,
    message: confirmationString
  }
}


