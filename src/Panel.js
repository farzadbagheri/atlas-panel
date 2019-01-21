import React, { Component } from 'react';
import data from './data.json';
import './App.css';

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
    }
    this.dataPrint();
  }

  dataPrint() {
    console.log("name", this.state.data.name);
    console.log('number of communities:', this.state.data.communities.length);
  }

  render() {
    return (
      <div className="Panel">
        <table>
          <tr>
            <th>Community</th>
            <th>Population</th>
          </tr>
          { this.state.data.communities.map((d) => {
            return (<tr>
                      <td>d.name</td>
                      <td>d.cases</td> 
                    </tr>);
          })}
        </table>
      </div>
    );
  }
}

export default Panel;
