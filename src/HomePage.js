import React, { Component } from 'react';
import Panel from './Panel';
import ArrowButton from './ArrowButton';
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
       {this.state.panelActive ? 
          <Panel hidePanel={this.togglePanel} />        	
       	:
       	<React.Fragment>
	       	<span className="homeText">Show Atlas panel</span>
	       	<ArrowButton toggle={this.togglePanel} style={{float: 'left', marginTop: '3%'}}  open/>
	    </React.Fragment>
       }
      </div>
    );
  }
}

export default HomePage;

