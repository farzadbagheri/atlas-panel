import React, { Component } from 'react';
import list from './data.json';
import Table from './Table';
import HideButton from './HideButton';
import './App.css';

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      data: list,

    }
  }

  sort = (type) => {

    let d = {...this.state.data};
    console.log(type);
     console.log('here', d.communities);
    d.communities.sort((a, b)=> {
      if(typeof a[type] === 'string') {
        return a[type].localeCompare(b[type]);
      } else {
        return a[type] - b[type];
      }
    });
     console.log('here2', d.communities);

    this.setState({data: d})
  }

  render() {
    return (
      <div className="Panel">
      <HideButton hide={this.props.hidePanel} />
        <div className="panelHeader">
          
          <h5 id='title' className="tableInfo">LIST OF COMMUNITIES</h5>

          <h1 className="tableInfo">{this.state.data.communities.length}</h1>
          <h4 className="tableInfo"><b>Communities</b> in <b>{this.state.data.name}</b></h4>
        </div>
        <Table data={this.state.data} sort={this.sort}/>
      </div>
    );
  }
}

export default Panel;
