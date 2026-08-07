// Task 2: buildProfileCard(user) — Template Literals 
// Given { name, title, company }, return a multiline string using template literal interpolation only.

// Input:  
// { name: "Arif", title: "Developer", company: "Programming Hero" }
// Output: 
// "Arif\nDeveloper at Programming Hero"


const buildProfileCard = (user) =>{
  let {name, title, company} = user 

  return `${name} ${title} at ${company}`
}

console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }));
