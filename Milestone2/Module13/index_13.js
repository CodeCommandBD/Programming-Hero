// problem 13: loop through an object 5 properties

const objects = {
    student :'shanto',
    age : 25,
    address: "dhaka"
}

for(let objkey in objects){
    console.log(objkey + " : " + objects[objkey]);
}