const calculateBonus = (employees, minScore = 7) => {
    if(!Array.isArray(employees)){
        return "Invalid Input"
    }

    // let [{name, metrics: {score}}] = employees

   
    

    let highScore = employees.filter((employee)=>{
        return employee?.metrics?.score >= minScore
    })

    console.log(highScore);
    

    let newArr = highScore.map((item)=>{
        return `${item.name} got the bonus!`
    })

    if(highScore.length === 0) {
        return "No one is eligible"
    }

    return newArr
    
};

console.log(
  calculateBonus(
    [
      { name: "Rafi", metrics: { score: 8 } },
      { name: "Sadia", metrics: { score: 6 } },
      { name: "Anis" },
    ],
    7,
  ),
);
