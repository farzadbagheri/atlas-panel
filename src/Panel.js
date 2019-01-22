import React, { Component } from 'react';
import list from './data.json';
import Table from './Table';
import ArrowButton from './ArrowButton';
import './App.css';

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      data: list,
      lastSort: null,
    }
  }

  sort = (type) => {
    let d = {...this.state.data};
    let typeCheck = type;
    d.communities.sort((a, b)=> {
      if(typeof a[type] === 'string') {
        //check for reverse sorting on second sort
        if(type === this.state.lastSort) {
          typeCheck = null;
          return b[type].localeCompare(a[type]);
        }
        return a[type].localeCompare(b[type]);
      } else {
        if(type === this.state.lastSort) {
          typeCheck = null;
          return b[type]- a[type];
        }
        return a[type] - b[type];
      }
    });
    this.setState({data: d, lastSort: typeCheck})
  }

  render() {
    return (
      <div className="Panel">
      <ArrowButton toggle={this.props.hidePanel} style={{float: 'right'}}/>
        <div className="panelHeader">
          <h5 id='title' className="tableInfo">LIST OF COMMUNITIES</h5>
          <h1 className="tableInfo" style={{marginBottom: '5px', fontWeight:'900'}}>{this.state.data.communities.length}</h1>
          <span id='subheader'><b>Communities</b> in <b>{this.state.data.name}</b></span>
        </div>
        <Table data={this.state.data} sort={this.sort}/>
      </div>
    );
  }
}

export default Panel;
