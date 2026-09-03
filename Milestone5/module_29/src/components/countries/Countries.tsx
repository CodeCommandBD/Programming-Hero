import { use, useState } from "react";
import type { CountryType } from "../../Type";
import CountryCard from "../country/CountryCard";

export interface CountriesPops {
  countriesPromise: Promise<CountryType[]>;
}

const Countries = ({ countriesPromise }: CountriesPops) => {
  const countriesData = use(countriesPromise);

  const [visitedCountry, setVisitedCountry] = useState<CountryType[]>([]);

  const [visitedFlag, setVisitedFlag] = useState<string[]>([]);

  const handleVisitedCountry = (country: CountryType): void => {
    let exist = visitedCountry.find((c) => c.ccn3.ccn3 === country.ccn3.ccn3);
    if (exist) {
      const remainingCountry = visitedCountry.filter(
        (c) => c.ccn3.ccn3 !== country.ccn3.ccn3,
      );
      setVisitedCountry(remainingCountry);
    } else {
      let newVisitedCountry = [...visitedCountry, country];
      setVisitedCountry(newVisitedCountry);
    }
  };

  const handleVisitedFlag = (flag: string): void => {
    if (visitedFlag.includes(flag)) {
      const remainingFlag = visitedFlag.filter((f) => f !== flag);
      setVisitedFlag(remainingFlag);
    } else {
      let newVisitedFlag = [...visitedFlag, flag];
      setVisitedFlag(newVisitedFlag);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 mb-10 gap-4">
        <div className="col-span-4 border rounded-xl p-5">
          <h2 className="font-semibold">
            Visited Country: {visitedCountry.length}{" "}
          </h2>
          <h2 className="font-semibold">Visited Flag: {visitedFlag.length} </h2>
        </div>
        <div className="col-span-8 border rounded-xl p-5">
          <div>
            <h3 className="font-bold text-xl ">Visited Country name</h3>
            <div className="flex items-center justify-between">
              <ul>
                {visitedCountry.map((country) => {
                  return <ol key={country.ccn3.ccn3}>{country.name.common}</ol>;
                })}
              </ul>
              <div className="w-1/2">
                <ul className="flex flex-wrap gap-5">
                  {
                    visitedFlag.map((flag, index)=>{
                      return <img key={index} className="w-20" src={flag} alt="" />
                    })
                  }
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {countriesData.map((country) => {
          return (
            <CountryCard
              key={country.ccn3.ccn3}
              country={country}
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedFlag={handleVisitedFlag}
            ></CountryCard>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
