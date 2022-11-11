function message(food, drinks) {
    if (drinks === void 0) { drinks = 'coke'; }
    console.log("I had tasty ".concat(food, " along with ").concat(drinks));
}
//message('pizza')
message('bun', 'coffee');
