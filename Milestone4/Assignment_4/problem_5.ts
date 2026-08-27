
interface Scores {
    total: number;
    average: number
}

const getQuizSummary = (scores: number[]):Scores => {
    const totalScores = scores.reduce((acc,item)=>{
        return acc + item 
    }, 0)

    const avg = scores.length === 0 ? 0 :  totalScores / scores.length
    return {
        total: totalScores,
        average: avg
    }
}

console.log(getQuizSummary([8, 9, 7, 10]));
