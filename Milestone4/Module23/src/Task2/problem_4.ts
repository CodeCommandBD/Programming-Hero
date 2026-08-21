
interface Track {
    title: string;
    minutes: number;
}

const calculateTotalListeningTime =(tracks: Track[]):number=> {
    const totalMinutes:number = tracks.reduce((acc:number, item:Track)=>{
        return acc + item.minutes
    },0)

    return totalMinutes
}

const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];

console.log(calculateTotalListeningTime(tracks));

const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
 
console.log(calculateTotalListeningTime(tracks2));

