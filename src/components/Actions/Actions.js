import React, { Component } from 'react';
import Update from './Update';
import axios from 'axios';
import Add from './Add';

class Actions extends Component {

    // update = (id, key, value) => {
    //     console.log(id)
    //     console.log(key)
    //     console.log(value)
    //     let clientData = { id, key, value }
    //     axios.put("http://localhost:4000/client", clientData)
    // }

    addClient = (newClient) => {
        console.log(newClient)
        axios.post("http://localhost:4000/client", newClient)
    }

    render() {
        return (
            <div className="actionSection">
                <div className="actionHeading">UPDATE</div>
                <Update clients={this.props.state} update={this.update} update={this.props.update}/>
                <br></br>
                <hr></hr>
                <div className="actionHeading">ADD CLIENT</div>
                <Add clients={this.props.state} addClient={this.addClient} />
            </div>
        );
    }
}

export default Actions;