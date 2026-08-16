var sumAll = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var total = num.reduce(function (total, item) {
        return total + item;
    }, 0);
    return total;
};
console.log(sumAll(1, 2, 3, 4));
