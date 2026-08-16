var info = function (data) {
    return "Name: ".concat(data.name, " Email: ").concat(data.email || "Not provided", " ");
};
var userInfo = {
    name: 'shanto',
    email: 'shan@gmail.com'
};
console.log(info(userInfo));
