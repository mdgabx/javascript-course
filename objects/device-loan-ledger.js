const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

// Splits a "month/day/year" string (zero-padding optional) into numbers.
// No Date object used anywhere.
const parseDateParts = (dateStr) => {
  const [month, day, year] = dateStr.split("/").map(Number);
  return { year, month, day };
};

// Returns negative if dateStrA is before dateStrB, positive if after,
// 0 if equal. Works directly as an Array.prototype.sort comparator.
const compareDates = (dateStrA, dateStrB) => {
  const a = parseDateParts(dateStrA);
  const b = parseDateParts(dateStrB);

  if (a.year !== b.year) return a.year - b.year;
  if (a.month !== b.month) return a.month - b.month;
  return a.day - b.day;
};

const listOverdueDevices = (ledger, today) => {
  return Object.values(ledger)
    .filter(
      (device) =>
        device.status === "CheckedOut" &&
        compareDates(device.dueDate, today) < 0
    )
    .sort((a, b) => compareDates(a.dueDate, b.dueDate));
};

const serializeLedger = (ledger) => {
  return JSON.stringify(ledger);
};

const loadLedger = (jsonString) => {
  return JSON.parse(jsonString);
};

const checkoutDevice = (ledger, assetTag, borrower) => {
  const cloneLedger = loadLedger(serializeLedger(ledger));

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
  const cloneLedger = loadLedger(serializeLedger(ledger));

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