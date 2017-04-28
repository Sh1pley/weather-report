import React, { Component } from 'react';
import './App.css';
import Search from '../containers/Search'
import CityList from '../containers/City_List'

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <CityList />
      </div>
    );
  }
}

export default App;
