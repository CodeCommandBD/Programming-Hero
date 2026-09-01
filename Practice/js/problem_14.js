


const applyBonusPoints = (users, bonus) => {
  const newArr = users.map((item)=>{
      return {
        ...item,
        points: item.points + bonus  
      }
    })    

    return newArr
}



const users = [
  { name: "Rafi", points: 20 },
  { name: "Nadia", points: 15 }
];

console.log(applyBonusPoints(users, 5));
