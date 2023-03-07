import React from "react";
import { useSelector } from "react-redux";
import WebsiteDesignCalulator from "./components/WebsiteDesignCalulator/WebsiteDesignCalulator";

function App() {

  // console.log(useSelector((state)=>(state)))

  return (
    <div className="bg-gray-700 px-10 md:px-48 py-10 ">
      <header className="" >
        <h3 className="text-yellow-500 text-2xl font-bold"> Website Design Calculator </h3>
      </header>
      <main className="h-screen">
        <WebsiteDesignCalulator/>
      </main>
      <footer>
        <p className="">
          Built By Dileep B C
        </p>
      </footer>
    </div>
  );
}

export default App;
