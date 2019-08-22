import React, { Component } from 'react';
import Client from './Client';
import Header from './Header';
import Filter from './Filter';
import ReactDOM from 'react-dom'

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            category: "name",
            input: "",
            lowerIndex:0,
            higherIndex:20

        }
    }

    paginate = (e) => {
        let sign = e.target.outerText
        let changeBy = (sign === "<" ? -20 : 20)
        if(changeBy === -20 && this.state.lowerIndex === 0){return}
        let lowerIndex = this.state.lowerIndex + changeBy
        let higherIndex = this.state.higherIndex + changeBy
        this.setState({
            lowerIndex,
            higherIndex
        })
    }

    filter = (input , category) => {
      this.setState({
          category,
          input
      })
   }

   getClientsWithFilter = () => {
        return this.props.state 
        .filter(c => c[this.state.category] === null ? null :
        this.state.category === "sold" ? c[this.state.category] === true : c[this.state.category].toLowerCase().includes(this.state.input.toLowerCase()))
        .map((c) => <Client key={c._id} client={c} upatePopUpInfo={this.props.upatePopUpInfo} deleteClient={this.props.deleteClient} />)
   }


   getClientWithPaginate=()=>{
    return this.props.state
    .filter(c => this.props.state.indexOf(c) >= this.state.lowerIndex && this.props.state.indexOf(c) < this.state.higherIndex)
    .map((c) => <Client key={c._id} client={c} upatePopUpInfo={this.props.upatePopUpInfo} deleteClient={this.props.deleteClient} />)
   }

    render() {
        return (
            <div>
                <Filter filter={this.filter} value={this.state.input}/>
                <span> You have {this.props.state.length} Clients</span>
                {this.state.input ? null : 
                    <div id="paginate-button">
                    <span onClick={this.paginate}>{"<"}</span><span> {this.state.lowerIndex}-{this.state.higherIndex} </span><span onClick={this.paginate}>{">"}</span>
                    </div>}
                <div className="clients">
                    <Header /> 
                    {this.state.input  ? this.getClientsWithFilter() : this.getClientWithPaginate()  }
                  
                </div>
            </div>
        );
    }
}

export default Clients;