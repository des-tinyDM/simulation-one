import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//Component Imports
import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventoryList:[]
    }
  }
  componentDidMount(){
    this.getInventory()
  }
  getInventory(){
    axios.get(`/api/inventory`).then(results => this.setState({inventoryList:results.data}))
  }
  render() {
    
    return (
      <div className="App">
        <Header className="App-header" />
          <div className="content">
            <Dashboard inventoryList={this.state.inventoryList} />
            <Form getInventory={this.getInventory} inventoryList={this.state.inventoryList}/>
          </div>
      </div>
    );
  }
}

export default App;
