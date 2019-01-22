import React, { Component } from 'react';
import './App.css';

class HideButton extends Component {
  render() {
    return (
      <div className="HideButton">
        <button onClick={this.props.hide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31">
            <g>
              <circle cx="15.5" cy="15.5" r="15" style={{fill:"none",stroke:"#4b506d",strokeMiterlimit:"10"}} />
              <line x1="13.31" y1="15.69" x2="17.69" y2="11.31" style={{fill:"none",stroke:"#4b506d",strokeMiterlimit:"10"}} />
              <line x1="13.31" y1="15.31" x2="17.69" y2="19.69" style={{fill:"none",stroke:"#4b506d",strokeMiterlimit:"10"}} />
            </g>
          </svg>
        </button>
      </div>
    );
  }
}

export default HideButton;