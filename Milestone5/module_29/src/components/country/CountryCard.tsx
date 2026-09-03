import { useState } from "react";
import type { CountryType } from "../../Type";

export interface CountryItem {
  country: CountryType;
  handleVisitedCountry: (country: CountryType)=>void
  handleVisitedFlag: (flag: string) => void
}

const CountryCard = ({ country, handleVisitedCountry, handleVisitedFlag }: CountryItem) => {
  const [Visited, setVisited] = useState<boolean>(false)

  const handleVisit = () =>{
    setVisited(!Visited)
    handleVisitedCountry(country)
  }
  const handleFlag = () =>{
    handleVisitedFlag(country.flags.flags.png)
  }
  return (
    <div className={`border-3 p-4 rounded-lg  border-amber-500 ${Visited ? 'bg-green-400': ''} `}>
      <h3 className="font-bold text-lg mb-5">{country.name.common}</h3>
      <img className="w-52 mb-5" src={country.flags.flags.png} alt={country.flags.flags.alt} />

      <p className={`${Visited ? "text-red-500" :  "" }`}>Population: </p>
      <p className={`${Visited ? "text-red-500" :  "" }`}>Capital: </p> 
      <button className="bg-amber-600 p-2 rounded-lg text-white" onClick={handleVisit}>
        {Visited ? "visited": 'Mark as visited'}
      </button>
      <button className="bg-emerald-900 p-2 rounded-lg text-white" onClick={handleFlag}>visited country  Flag</button>
    </div>
  );
};

export default CountryCard;
