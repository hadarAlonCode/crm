import React, { Component } from 'react';
import Client from './Client';
import Header from './Header';
import Filter from './Filter';

class Clients extends Component {
    render() {
        return (
            <div >
                <Filter />
                <div className="clients">
                    <Header />
                    {this.props.state.map((c,i)=> <Client client={c} key={i}/>)}
                </div>
            </div>
        );
    }
}

export default Clients;