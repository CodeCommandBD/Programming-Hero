
const createCharacter = ({name = "Hero", classType = "Warrior", weapon ="Sword"} = {}) => {
    if(typeof name !== "string"){
        return "Invalid Name"
    }

    return `${name} is  a ${classType} armed with a ${weapon}`
    
}

console.log(createCharacter({name: "Arthur", weapon: "Excalibur"}));
console.log(createCharacter());
console.log(createCharacter({name: 123, classType: "Mage"}));
