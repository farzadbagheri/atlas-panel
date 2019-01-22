import React, { Component } from 'react';

import './App.css';

class TableData extends Component {
  render() {
    return (
      <div className="TableData">
        <td>{this.props.value}</td>
      </div>
    );
  }
}

export default TableData;