var product = function (name, price, isAvailable) {
    return "".concat(name, " cost ").concat(price, " and is available: ").concat(isAvailable);
};
console.log(product("laptop", 45000, true));
