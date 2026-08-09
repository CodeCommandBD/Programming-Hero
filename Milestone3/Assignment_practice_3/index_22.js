const trackTeamPerformance = (teamInfo, ...members) => {
    if(!teamInfo?.teamName){
        return "Invalid Team"
    }

    let totalScore = members.reduce((total, item)=>{
        return total + item.score 
    },0)

    // console.log(members.length);
    

    let averageScore = 0

    if(members.length === 0){
        averageScore = 0
    }else{
        averageScore = totalScore / members.length
    }


    let topPerformer = "None"
    let highScore = 0

    if(members.length > 0){
        for(let member of members){
            if(member.score > highScore){
                highScore = member.score
                topPerformer = member.name
            }         
        }
    }
    
    return {
        ...teamInfo,
        memberCount: members.length,
        averageScore: averageScore,
        topPerformer: topPerformer
    }
    

}

const team = { teamName: "Tigers", manager: "Mashrafe" };
// Function Call:
console.log(trackTeamPerformance(team, { name: "Shanto", score: 40 }, { name: "Liton", score: 80 }));


// Output: 
// { teamName: "Tigers", manager: "Mashrafe", memberCount: 2, averageScore: 60, topPerformer: "Liton" }