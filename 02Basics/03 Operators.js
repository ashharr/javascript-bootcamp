// D =  (L - S)/L *100

var sellingPrice = 199,
  listingPrice = 799;

discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(Math.round(discountPercent) + "% off!");

result = listingPrice > sellingPrice;
console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
