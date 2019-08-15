import React, { Component } from 'react';
import Update from './Update';
import Add from './Add';

class Actions extends Component {

   update = (id, key, value) => {
   console.log(id)
   console.log(key)
   console.log(value)
}

addClient = ( newClient) => {
    console.log(newClient)
   
 }

    render() {
        return (
            <div>
            <div>UPDATE</div>
             <Update clients={this.props.state} update={this.update}/>
            <div>ADD CLIENT</div>
            <Add clients={this.props.state} addClient={this.addClient}/>
        </div>
        );
    }
}

export default Actions;