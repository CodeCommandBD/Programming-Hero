interface Player {
    name: string;
    scores: number[];
}

interface PlayerStats {
    name: string;
    average: number;
    rank: string
}

const getPlayerStats = (player: Player):PlayerStats =>{

    if(player.scores.length === 0){
        return {
            name: player.name,
            average: 0,
            rank: "Rookie"
        }
    }

    const totalscores:number = player.scores.reduce((acc, item)=>{
        return acc + item
    },0);

    const avg = totalscores / player.scores.length

    if(avg >= 80 ){
        return {
            name: player.name,
            average: avg,
            rank:"MVP"
        }
    }

     return {
            name: player.name,
            average: avg,
            rank:"Rookie"
        }
    
}

console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
})
);
console.log(getPlayerStats({
    name: "Nova",
    scores: []
})
);
