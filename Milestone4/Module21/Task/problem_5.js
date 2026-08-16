var info = function (data) {
    return "Name: ".concat(data.name, " Email: ").concat(data.email || "Not provided", " ");
};
console.log(info({ name: 'shnto' }));
