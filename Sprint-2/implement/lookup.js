function createLookup(input) {
  let currencyPairs = {};

  // Check if input is an array
  if (!Array.isArray(input)) {
    console.error(`Invalid input, this is not an array of arrays ${input}`);
    return currencyPairs;
  }
  //   // Loop through each array in the input
  //   for (const singleArray of input) {
  //     // Ensure each item is an array with exactly two elements
  //     if (Array.isArray(singleArray) && singleArray.length === 2) {
  //       // Add key-value pair to the result object
  //       currencyPairs[singleArray[0]] = singleArray[1];
  //     } else {
  //       // Log error for invalid pairs
  //       console.error(`Invalid input ${singleArray}`);
  //     }
  //   }
  // } else {
  //   // Log error if the input is not an array of arrays
  //   console.error(`Invalid input, this is not an array of arrays ${input}`);
  // }


  //SIMPLER METHOD

  for (const [key, value] of input) {
    if (typeof key === "string" && typeof value === "string") {
      currencyPairs[key] = value;
    }
    else {
      console.error(`Invalid input ${[key, value]}`);

    }
  }
  return currencyPairs;
}
console.log(createLookup([['US', 'USD'], ['CA', 'CAD']]));
module.exports = createLookup;
