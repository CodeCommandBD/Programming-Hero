
type Weather = 'sunny'| 'rainy' | 'cloudy'

const getwather = (weather: Weather):string => {
    if(weather === 'sunny'){
        return "wear sunscreen"
    }else if(weather === 'rainy'){
        return "carry an umbrella"
    }

    return "Bring a light jacket"
}

console.log(getwather('cloudy'));
