import React from "react";
import _ from "lodash";

import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import Funds from "../../assets/funds.json";

class CardGroup extends React.Component {
  state = {
    allFunds: [],
    currentPage: 1,
    fundsPerPage: 10,
    indexOfLastFund: 10,
    indexOfFirstFund: 0,
    currentFunds: [],
  };

  componentDidMount() {
    let allFunds = Funds.result.funds;
    let currentFunds = allFunds.slice(
      this.state.indexOfFirstFund,
      this.state.indexOfLastFund
    );

    this.setState({
      ...this.state,
      allFunds: allFunds,
      currentFunds: currentFunds,
    });
  }

  getCards = (record) => {
    let name = record.name;
    name = name.slice(0, 25);
    name += "...";
    return (
      <Card
        name={name}
        key={record.UID}
        cardID={record.isin}
        fundType={record.FundType}
        avg3YReturn={record.threeyearReturn}
        oneYearReturn={record.oneyearReturn}
      ></Card>
    );
  };

  paginate = (pageNumber) => {
    let currentPage = pageNumber;
    let indexOfFirstFund = currentPage * this.state.fundsPerPage;
    let indexOfLastFund = indexOfFirstFund + this.state.fundsPerPage;
    let currentFunds = this.state.allFunds.slice(
      indexOfFirstFund,
      indexOfLastFund
    );
    this.setState({
      ...this.state,
      currentPage: currentPage,
      indexOfFirstFund: indexOfFirstFund,
      indexOfLastFund: indexOfLastFund,
      currentFunds: currentFunds,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            {_.map(this.state.currentFunds, this.getCards)}
          </div>
        </div>
        <Pagination
          fundsPerPage={this.state.fundsPerPage}
          totalFunds={this.state.allFunds.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}
export default CardGroup;
