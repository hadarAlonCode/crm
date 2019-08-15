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

  update = async (id, key, value) => {
    console.log(id)
    console.log(key)
    console.log(value)
    let clientData = { id, key, value }
    console.log(clientData);
    
    await axios.put("http://localhost:4000/client", clientData)
    this.componentDidMount()
}



  upatePopUpInfo = async (name, surname, country, clientID) => {
  await axios.put(`http://localhost:4000/client/${clientID}`, { name: `${name} ${surname}`, country })
  await this.getAllClients()
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
        <Route path="/clients" exact render={() => <Clients state={this.state.data} upatePopUpInfo={this.upatePopUpInfo}/>} />
        <Route path="/actions" exact render={() => <Actions state={this.state.data} update={this.update} />}/>
        <Route path="/analytics" exact render={() => <Analytics state={this.state.data} />}/>
        </div>
      </Router>
    );
  }
}

export default App;

