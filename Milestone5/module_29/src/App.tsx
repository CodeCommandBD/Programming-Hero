import { Suspense } from "react";
import type { CountryType } from "./Type";
import Countries from "./components/countries/Countries";

const App = () => {
  const countriesPromise = async (): Promise<CountryType[]> => {
    let res = await fetch("https://openapi.programming-hero.com/api/all");
    let data = await res.json();
    return data.countries;
  };

  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl my-15">World on the GO...</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Countries countriesPromise={countriesPromise()}></Countries>
      </Suspense>
    </div>
  );
};

export default App;
