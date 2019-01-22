import React, { Component } from 'react';
import SortButton from './SortButton';
import './App.css';

class TableHeader extends Component {
  render() {
    return (
      <div className="TableHeader">
        <th>{this.props.value}  </th> <SortButton value={this.props.value} />
      </div>
    );
  }
}

export default TableHeader;
