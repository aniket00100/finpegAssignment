import React from "react";
import {
  HouseFill,
  BriefcaseFill,
  CashStack,
  PersonFill,
} from "react-bootstrap-icons";

const BottomNavbar = () => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <div className="container-fluid">
        <div style={{ padding: "1%" }}>
          <HouseFill color="grey" size={30} />
        </div>
        <div style={{ padding: "1%" }}>
          <CashStack color="grey" size={30} />
        </div>
        <div style={{ padding: "1%" }}>
          <BriefcaseFill color="grey" size={30} />
        </div>
        <div style={{ padding: "1%" }}>
          <PersonFill color="grey" size={30} />
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
