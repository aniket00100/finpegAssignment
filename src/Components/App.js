import React from "react";

import TopNavbar from "./Navbars/TopNavbar";
import BottomNavbar from "./Navbars/BottomNavbar";
import CardGroup from "./CardGroup/CardGroup";
import SearchBar from "./SearchBar/SearchBar";
import BadFix from "./BadFix/BadFix";
// import Funds from "../assets/funds.json";

function App() {
  // console.log(Funds.result.funds);
  return (
    <div>
      <TopNavbar />
      <BadFix />
      <div className="container">
        <SearchBar />
      </div>
      <CardGroup />
      <BottomNavbar />
      <BadFix />
    </div>
  );
}

export default App;
