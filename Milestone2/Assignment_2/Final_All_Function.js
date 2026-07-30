//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number' ){
    return "Invalid"
  }

  if(teamAGoals > teamBGoals){
    return "Team A Won"
  }else if(teamBGoals > teamAGoals){
    return "Team B Won"
  }else{
    return "Draw"
  }
}

//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
    if(!Array.isArray(weights)){
        return "Invalid"
    }


    let totalWeight = 0;

    for(let weight of weights){
        // console.log(weight);
        totalWeight += weight
    }

    if( totalWeight <= 400){
        return true
    }else{
        return false
    } 
}

//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
        return "Invalid"
    }

    let tokenFee = 0;

    if (tokensUsed <= 500) {
        return tokenFee;
    } else {
        let extra = tokensUsed - 500
        // console.log(extra);

        tokenFee = Math.floor(extra / 100) * 5
        // console.log(tokenFee);

    }

    return tokenFee
}

//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid"
    }

    let bigRating = 0;
    let topName = "";

    for (let restaurant of restaurants) {
        // console.log(restaurant.rating);

        if (restaurant.rating > bigRating) {
            bigRating = restaurant.rating
            topName = restaurant.name
        }
    }

    // console.log(BigRating);
    // console.log(topName);

    return topName.toUpperCase()
}

//Problem-05: Debugging Challenge - API Response Time Monitor
/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (!Array.isArray(times) || times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    // console.log(i, times[i]);
    
    if (typeof times[i] !== "number") {
      return "Invalid";
    }

    total  += times[i];
  }
//   console.log(total);
  

  return total / times.length;
}

