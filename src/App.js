import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/Navbar';
import Clients from './components/Clients/Clients';
import Analytics from './components/Analytics/Analytics';
import Actions from './components/Actions/Actions';
import Home from './components/Home';
import data from './data.json';


class App extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }


  async componentDidMount() {
    const response = await axios.get("http://localhost:4000/clients")
    this.setState({ data: response.data })
  }


//read the data from json===========
  //  componentDidMount() {
  //   setTimeout(() => {
  //     let response = data
  //     this.setState({ data: response })
  //   }, 100)   
  // }



  render() {
    return (
      <Router>
        <div className="App">
        <Route path="/" exact component={Home}/>
          <Navbar />
        <Route path="/clients" exact render={() => <Clients state={this.state.data}/>} />
        <Route path="/actions" exact render={() => <Actions state={this.state.data} />}/>
        <Route path="/analytics" exact render={() => <Analytics state={this.state.data} />}/>
        </div>
      </Router>
    );
  }
}

export default App;

