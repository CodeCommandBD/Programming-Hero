// Task 4: Framework Vote Counter (Dynamic Object Update & for...of)

// Function Name Must be: countVotes

// ডেভেলপারদের মধ্যে কোন ফ্রেমওয়ার্ক বেশি জনপ্রিয় তার একটি পোল (Poll) হচ্ছে। ফাংশনটি ভোটের লিস্ট নিয়ে রেজাল্ট তৈরি করবে। (এটি ঠিক আগে করা "Movie Profit" বা "Result Processor" এর লজিকের মতো)।


// Input

// countVotes(...votes) — Rest Parameter, যা String এর একটি অ্যারে রিসিভ করবে (যেমন: ["React", "Vue", "React"])।


// Output / নিয়ম (Rules)

// ফাংশনের ভেতরে voteResult নামে একটি খালি {} অবজেক্ট নিন।

// votes অ্যারের উপর for...of লুপ চালান।

// Dynamic bracket notation ([]) ব্যবহার করে voteResult এর ভেতর ফ্রেমওয়ার্কের নাম বসান এবং তার ভোট ১ করে বাড়ান। (লজিক: আগে থেকে ফ্রেমওয়ার্কটি অবজেক্টে থাকলে তার ভ্যালুর সাথে ১ যোগ হবে, আর না থাকলে ভ্যালু ১ হবে)।

// Return করুন পুরো voteResult অবজেক্টটি।

// Validation

// যদি কোনো ভোট না পড়ে (অর্থাৎ অ্যারেটি empty হয়), তবে Return করুন "No votes yet"।


const countVotes = (...votes) =>{
    if(votes.length === 0){
       return "No votes yet"
    }
    let voteResult = {}
    
    for(let vote of votes){
        // if(voteResult[vote] === undefined){
        //     voteResult[vote] = 1
        // }else{
        //     voteResult[vote] = voteResult[vote] + 1
        // }

        voteResult[vote]= (voteResult[vote] || 0) + 1
    }
    return voteResult

}

console.log(countVotes("React", "Vue", "React", "Angular", "React"));

console.log(countVotes("Svelte", "Svelte"));

console.log(countVotes());
