import React from "react";
import _ from "lodash";

class Pagination extends React.Component {
  state = {
    pageNumbers: [],
    pageWindow: [],
    currentPage: 1,
    windowSize: 3,
  };

  componentDidMount() {
    let pageWindow = [];
    for (let i = 1; i <= 3; i++) {
      pageWindow.push(i);
    }
    this.setState({
      ...this.state,
      pageWindow: pageWindow,
    });
  }

  componentDidUpdate() {
    let pageNumbers = [];
    if (this.props.totalFunds !== 0 && this.state.pageNumbers.length === 0) {
      for (let i = 1; i <= this.props.totalFunds; i++) {
        pageNumbers.push(i);
      }
      this.setState({ ...this.state, pageNumbers: pageNumbers });
    }
  }

  pageClick = (pageNumber) => {
    pageNumber = pageNumber < 1 ? 1 : pageNumber;
    pageNumber =
      pageNumber > this.state.pageNumbers.length
        ? this.state.pageNumbers.length
        : pageNumber;
    let pageWindow = [];
    if (this.state.pageNumbers.length - pageNumber >= 3) {
      for (let i = pageNumber; i < pageNumber + 3; i++) {
        pageWindow.push(i);
      }
    } else {
      for (let i = pageNumber; i < this.state.pageNumbers.length; i++) {
        pageWindow.push(i);
      }
    }
    this.setState({
      ...this.state,
      pageWindow: pageWindow,
      currentPage: pageNumber,
    });
    this.props.paginate(pageNumber);
  };

  getListItem = (i) => {
    return (
      <li className="page-item" key={i}>
        <a className="page-link" href="!#" onClick={() => this.pageClick(i)}>
          {i}
        </a>
      </li>
    );
  };

  render() {
    console.log(this.state.currentPage);
    return (
      <div className="p-3">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a
                className="page-link"
                href="!#"
                aria-label="Previous"
                onClick={() => this.pageClick(this.state.currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {_.map(this.state.pageWindow, this.getListItem)}
            <li className="page-item">
              <a
                className="page-link"
                href="!#"
                aria-label="Next"
                onClick={() => this.pageClick(this.state.currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Pagination;
