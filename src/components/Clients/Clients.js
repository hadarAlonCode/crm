import React, { Component } from 'react';
import Client from './Client';
import Header from './Header';
import Filter from './Filter';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            category: "owner",
            input: ""

        }
    }

    filter = (input, category) => {
      this.setState({
          category,
          input
      })
   }

    render() {
        return (
            <div >
                <Filter filter={this.filter} value={this.state.input}/>
                <div className="clients">
                    <Header />
                    {this.props.state.filter(c => c[this.state.category].toLowerCase().includes(this.state.input.toLowerCase())).map((c, i) => <Client key={i} client={c} />)}
                </div>
            </div>
        );
    }
}

export default Clients;