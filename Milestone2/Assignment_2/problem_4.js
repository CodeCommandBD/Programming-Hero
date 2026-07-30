function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0){
        return "Invalid"
    }

    let bigRating = 0;
    let topName = "";

    for( let restaurant of restaurants ){
        // console.log(restaurant.rating);
        
       if(restaurant.rating > bigRating){      
            bigRating = restaurant.rating
            topName = restaurant.name
       }
    }

    // console.log(BigRating);
    // console.log(topName);
    
    return  topName.toUpperCase()
    
}

console.log(topRatedRestaurant([
    {name:"Chillox",rating:4.5},
    {name:"Sultan's Dine",rating:4.8}
]));

console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]

));

console.log(topRatedRestaurant([]));
console.log(topRatedRestaurant("restaurants"));
