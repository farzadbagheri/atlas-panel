import React, { Component } from 'react';
import SortButton from './SortButton';
import './App.css';

class Table extends Component {

  get headers() {
    //getter for getting key set of initial value to determine correct headers.
    //this allows for minor data agnosticism, but assumes all possible
    //data points are present in each community data point
    const headers = Object.keys(this.props.data.communities[0]);
    return headers.map((header) => (<React.Fragment> <th className={header}>{header} <SortButton /> </th></React.Fragment>));
  }

  get data() {
    return this.props.data.communities.map((data) => {
      return (
        <tr key={Math.random()}>
          <td>{data.name}</td>
          <td>{data.cases}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <table className="Table">
        <thead >
          <tr className="header">
            <th className="sticky" id="name"><SortButton value={"NAME "} type={'name'} sort={this.props.sort} lastSort={this.props.lastSort}/></th>
            <th className="sticky" id="cases"><SortButton id="column2" type={'cases'} sort={this.props.sort} value={"NUMBER OF CASES "} lastSort={this.props.lastSort}/></th>
          </tr>
        </thead>
        <tbody>
          {this.data}
        </tbody>
      </table>
    );
  }
}

export default Table;
