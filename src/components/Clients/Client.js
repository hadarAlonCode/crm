import React, { Component } from 'react';
var moment = require('moment');

class Client extends Component {
    render() {
        let name = this.props.client.name.split(' ')[0]
        let lastName = this.props.client.name.split(' ')[1]
        return (
            <div className="client">
               <div>{name}</div>
               <div>{lastName}</div> 
               <div>{this.props.client.country}</div>
               <div>{moment(this.props.client.firstContact).format("L")}</div>
               <div>{this.props.client.emailType ? this.props.client.emailType : "not send" }</div>
               <div>{this.props.client.sold ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>}</div>
               <div>{this.props.client.owner}</div>
            </div>
        );
    }
}

export default Client;

