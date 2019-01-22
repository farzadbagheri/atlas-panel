import React, { Component } from 'react';
import './App.css';

class SortButton extends Component {
  render() {
    return (
        <button className="SortButton" id={this.props.id} onClick={() => this.props.sort(this.props.type)}>
        {this.props.value}
          {!this.props.sorted ? <svg xmlns="http://www.w3.org/2000/svg"  width="8" height="8" viewBox="0 0 4.5 3">
            <g>
              <polygon points="2.25 3 0 0 4.5 0 2.25 3" style={{fill:"#5e68ad"}}/>
            </g>
          </svg> 
          : 
          <svg src='./FlippedSort' alt='sort button' /> }
        </button>
    );
  }
}

export default SortButton;

