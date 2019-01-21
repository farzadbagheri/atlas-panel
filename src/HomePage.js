import React, { Component } from 'react';
import Panel from './HomePage.js';
import './App.css';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      panelActive: false,
    }
  }

  togglePanel = () => {
  	this.setState({ panelActive: !this.state.panelActive });
  }

  render() {
    return (
      <div className="HomePage">
        <Panel active={this.state.panelActive} hidePanel={this.togglePanel} />
      </div>
    );
  }
}

export default HomePage;

