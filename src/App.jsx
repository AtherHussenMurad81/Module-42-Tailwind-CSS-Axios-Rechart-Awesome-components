import { Suspense } from "react";
import "./App.css";
import Dauisy from "./Component/Dauisy";
import Navbar from "./Component/Navbar";
import PriceingOption from "./Component/PriceingOption";
import ResultChart from "./Component/resultChart";
import axios from "axios";
import MarksChart from "./Component/MarksChart";

const pricingPromise = fetch("/Pricing.json").then((res) => res.json());

const marksPromise = axios.get("marksData.json");

function App() {
  return (
    <>
      <header className="body">
        <Navbar></Navbar>
        {/* <Dauisy></Dauisy> */}
      </header>
      <main>
        <Suspense fallback={<h1 className="text-4xl">loading</h1>}>
          <PriceingOption pricingPromise={pricingPromise}></PriceingOption>
        </Suspense>

        <Suspense fallback={<h1 className="text-4xl">loading</h1>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
    </>
  );
}

export default App;
