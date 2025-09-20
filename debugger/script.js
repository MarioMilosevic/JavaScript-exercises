function calculateDiscount(price, discount) {
  let finalPrice = price - (discount / 100) * price;
  return finalPrice;
}

let result = calculateDiscount(100, 20);
console.log("Final Price:", result);
