import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/List';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }



  render() {
    return (
      <div className="App">
        <List names={this.state.names} />
      </div>
    );
  }

  componentWillMount() {
    var self = this;
    axios.get('https://content.thewest.com.au/publication?kind=article')
    .then(function (response) {
      self.setState({
        names: response.data.names
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}

export default App;
