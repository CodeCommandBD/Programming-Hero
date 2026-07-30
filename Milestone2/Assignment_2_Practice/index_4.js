// A-03  —  Weekly Steps Summary (done)         🟡 Medium

// Scenario:  FitTrack, a fitness app, logs a user's daily step counts for the week in an array. Write a function weeklyStepsSummary(stepsArray) that returns an object { totalSteps, goalReached }, where goalReached is true once totalSteps reaches 50000. 
// If stepsArray is not an array, return "Invalid". 
// If any value inside the array is not a number, return "Invalid".
// Expected Output:
//    weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000])
//      → { totalSteps: 50200, goalReached: true }

// Hints:
//   1.  Loop through the array and add each day's steps to a running total
//   2.  Compare the total to 50000 to set goalReached, then return both in one object


function weeklyStepsSummary(stepsArray){

    if(!Array.isArray(stepsArray) || stepsArray.length === 0){
        return "Invalid"
    }
    let totalSteps = 0;
    let goalReached = false;
    

    for(let step of stepsArray){
        if(typeof step !== "number" || Number.isNaN(step)){
            return "Invalid"
        }

        totalSteps += step

        if(totalSteps >= 50000){
            goalReached = true
        }
        
        
    }
    
    return{
        totalSteps: totalSteps,
        goalReached: goalReached
    }



}

console.log(weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]));
