import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableData from './TableRow';
import './App.css';

class TableRow extends Component {
  
  getVals = () => {
    //iterates over keys in each community data point to
    //return an array of TableData components to be rendered
    let datapoints = [];
    for(var key in this.props.values) {
      datapoints.push(<TableData value={this.props.values[key]} />);
    }
    return datapoints;
  }

  render() {
    return (
      <div className="TableRow">
        {this.props.headers ? 
          this.props.values.map((header) => {
            return (<TableHeader value={header} />);
          })
          :
          this.getVals
        }
      </div>
    );
  }
}

export default TableRow;
