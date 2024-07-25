import { useState } from "react";
import Top from "./components/Top";
import Main from "./components/main";
import About from "./components/about";
import Int from "./components/int";
import Works from "./components/works";
import Cont from "./components/cont";
import End from "./components/end";

function App() {
  return (
    <div className="overflow-x-hidden text-teal-50 antialiased selection:bg-green-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-b from-lgbg to-dkbg"></div>
      </div>
      <div className="container mx-auto px-8">
        <Top />
        <Main />

        <section className="">
          <About />
          <Int />
          <Works />
          <Cont />
          <End />
        </section>
      </div>
    </div>
  );
}

export default App;
