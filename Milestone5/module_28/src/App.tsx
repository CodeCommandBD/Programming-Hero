import { Suspense } from "react"
import LeftSideBar from "./components/LeftSideBar";
import Navbar from "./components/Navbar";
import RightSideBar from "./components/RightSideBar";

const TableData = async() => {
  let res = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await res.json()
  return data
}

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="grid grid-cols-12 gap-5 container mx-auto">
        <div className="col-span-3">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-9">
          <Suspense fallback={<p>Loading....</p>}>
            
            <RightSideBar TableData={TableData()}></RightSideBar>
        </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
