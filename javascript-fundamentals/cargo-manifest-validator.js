/* 
Build a Cargo Manifest Validator

In this lab, you will use JavaScript to normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.

Each cargo manifest will be represented as an object with the following properties:

    containerId: a positive integer identifying the associated cargo container.
    destination: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
    weight: a positive number representing the cargo's weight.
    unit: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
    hazmat: a boolean value indicating whether hazardous material handling is needed.

Example cargo manifest object:

{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    You should implement a function named normalizeUnits with a manifest parameter.
        The function must not mutate the original manifest object and must always return a new object where weight is normalized to kilograms and unit is set to "kg".
        If the weight of the manifest object is expressed in pounds (unit: "lb"), the function should convert the weight to kilograms using the approximate conversion, 1 lb = 0.45 kg, and update the unit accordingly.
        If the weight is already expressed in kilograms (unit: "kg"), the weight and unit should remain unchanged.

    You should implement a function named validateManifest with a manifest parameter.
        The function must not mutate the original manifest object and must always return a new object.
        If the input manifest is valid (no missing or invalid properties), the function should return an empty object.
        If the input manifest is not valid, the function should return an object containing entries for each missing or invalid property. Missing properties should have the value "Missing" and invalid properties should have the value "Invalid".

    Example return value where the input object is missing the destination property and has an invalid weight property:

    {
      destination: "Missing",
      weight: "Invalid"
    }

    You should implement a function named processManifest with a manifest parameter. The function should log:
        If the manifest object is valid, Validation success: ${containerId} and then the manifest's weight in kilograms as such, Total weight: ${weight} kg. Use normalizeUnits() for this conversion.
        If the manifest object is not valid, Validation error: ${containerId} and then the object returned by calling validateManifest() with the manifest object.

    Note: each of these two cases should have two console.log() calls.


*/


const normalizeUnits = (manifest) => {
  const newManifest = { ...manifest };

  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg"
  }

  return newManifest;
}

const validateManifest = (manifest) => {
  const errors = {};

  if (!Object.hasOwn(manifest, "containerId")) {
    errors.containerId = "Missing";
  } else if
    (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0 ||
    manifest.containerId === null ||
    manifest.containerId === undefined ||
    manifest.containerId === "" ||
    manifest.containerId === 0
  ) {
    errors.containerId = "Invalid";
  }

  if (!Object.hasOwn(manifest, "destination")) {
    errors.destination = "Missing";
  } else if
    (
    typeof manifest.destination !== "string" ||
    manifest.destination === null ||
    manifest.destination === undefined ||
    manifest.destination.trim() === ""
  ) {
    errors.destination = "Invalid";
  }

  if (!Object.hasOwn(manifest, "weight")) {
    errors.weight = "Missing";
  } else if
    (
    manifest.weight <= 0 ||
    manifest.weight === null ||
    manifest.weight === undefined ||
    manifest.weight === "" ||
    Number.isNaN(manifest.weight)
  ) {
    errors.weight = "Invalid";
  }

  const validUnits = ["kg", "lb"]; //valid units

  if (!Object.hasOwn(manifest, "unit")) {
    errors.unit = "Missing";
  } else if
    (
    !validUnits.includes(manifest.unit) ||
    manifest.unit === null ||
    manifest.unit === undefined ||
    manifest.unit === ""
  ) {
    errors.unit = "Invalid";
  }

  if (!Object.hasOwn(manifest, "hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
};

const processManifest = (manifest) => {
  const newManifest = { ...manifest };
  const process = validateManifest(newManifest);

  if (Object.keys(process).length === 0) {
    // if valid check for weight if in kg
    console.log(`Validation success: ${newManifest.containerId}`)
    if (newManifest.unit === "kg") {
      console.log(`Total weight: ${newManifest.weight} kg`);
    } else {
      const normalizedManifest = normalizeUnits(newManifest);

      console.log(`Total weight: ${normalizedManifest.weight} kg`);
    }
  } else {
    console.log(`Validation error: ${newManifest. containerId}`)
    console.log(process);
  }
  return "";
}


// console.log(validateManifest({containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" }));
// console.log(validateManifest({ containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false }));
// console.log(validateManifest({ containerId: -2 }));
// console.log(validateManifest({ containerId: 3.50 }))
// console.log(validateManifest({ destination: " " }))
// console.log(validateManifest({ weight: NaN }))
// console.log(processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }))
console.log(processManifest({ containerId: -88, destination: "Soledad", weight: NaN }))