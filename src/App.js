import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/Navbar';
import Clients from './components/Clients/Clients';
import Analytics from './components/Analytics/Analytics';
import Actions from './components/Actions/Actions';
import Home from './components/Home';
// import data from './data.json';
// const URL_KEY = ""
const URL_KEY = "http://localhost:4000"

class App extends Component {

  constructor(){
    super()
    this.state = {
      data: []
    }
  }

  async getClientData() {
    const response = await axios.get(`${URL_KEY}/clients`)
    await this.setState({ data: response.data })
  }

  componentDidMount = () => {
    this.getClientData()
  }

 
  update = async (id, key, value) => {
    let clientData = { id, key, value }
    await axios.put(`${URL_KEY}/client`, clientData)
    this.getClientData()
}

deleteClient = async (clientID) => {
  await axios.delete(`${URL_KEY}/client/${clientID}`)
   this.getClientData() 
 
}

addClient =async  (newClient) => {
  await axios.post(`${URL_KEY}/client`, newClient)
  this.getClientData()
}

  upatePopUpInfo = async (name, surname, country, clientID) => {
    console.log(surname);
    console.log(name);
    console.log(country);
    console.log(clientID);

  await axios.put(`${URL_KEY}/client/${clientID}`, { name: `${name} ${surname}`, country })
  await this.getClientData()
}

//******* read the data from json *******
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
        <Route path="/clients" exact render={() => <Clients state={this.state.data} upatePopUpInfo={this.upatePopUpInfo} deleteClient={this.deleteClient}/>} />
        <Route path="/actions" exact render={() => <Actions state={this.state.data} update={this.update} addClient={this.addClient} />}/>
        <Route path="/analytics" exact render={() => <Analytics state={this.state.data} />}/>
        </div>
      </Router>
    );
  }
}

export default App;

