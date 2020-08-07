import React from "react";
import { Search } from "react-bootstrap-icons";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light p-0">
        <div className="container shadow-sm p-0">
          <div className="row">
            <div className="col-auto mr-auto">
              <button type="button" className="btn btn-light searchBar-button">
                All Funds
              </button>
              <button type="button" className="btn btn-light searchBar-button">
                Screener
              </button>
              <button type="button" className="btn btn-light searchBar-button">
                Filter by AMC
              </button>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-info search-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light p-3">
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control input-field"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
