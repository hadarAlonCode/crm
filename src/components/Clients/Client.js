import React, { Component } from 'react';
import Popup from "reactjs-popup";

var moment = require('moment');


class Client extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // fullName:  this.props.client.name,
            updateName: props.client.name.split(' ')[0],
            updateSurname: props.client.name.split(' ')[1],
            country: props.client.country,
        }
    }
// i have another put request

    // getupdateName = () => {
    //     if (!this.getClientId()) {
    //         return alert("need to put name")
    //     }
    //     this.props.update(this.props.client._id, "name" , `${this.state.updateName} ${this.state.updateSurname}` )
    // }

    // getupdateEmailType = () => {
    //     if (!this.getClientId()) {
    //         return alert("need to put name")
    //     }
    //     this.props.update(this.props.client._id, "country", this.state.country)
    // }


    // handleInputOwner = (e) => {
    //     const value = e.target.value
    //     const name = e.target.name
    //     this.setState({ [name]: value })
    // }

    render() {
        let name = this.props.client.name.split(' ')[0]
        let lastName = this.props.client.name.split(' ')[1]
        return (
            <Popup trigger={<div className="client" onClick={this.popUp}>
                <div>{name}</div>
                <div>{lastName}</div>
                <div>{this.props.client.country}</div>
                <div>{moment(this.props.client.firstContact).format("L")}</div>
                <div>{this.props.client.emailType ? this.props.client.emailType : "not send"}</div>
                <div>{this.props.client.sold ? <i class="fas fa-check"></i> : <i class="fas fa-times"></i>}</div>
                <div>{this.props.client.owner}</div>
            </div>}
             modal>
                {close => (
                    <div className="modal">
                        <a className="close" onClick={close}>
                            &times;</a>
                        <div className="header"> Update Client </div>
                        <div className="content">
                          <div><span>Name:</span> <input type="text"></input></div>
                          <div><span>Surname:</span> <input type="text"></input></div>
                          <div><span>country:</span> <input type="text"></input></div>      
                           </div>

                        <div className="actions">
                            <Popup
                                trigger={<button className="button"> Update </button>}
                                position="top center"
                                closeOnDocumentClick>
                            </Popup>
                        </div>
                    </div>
                )}
            </Popup>

        );
    }
}

export default Client;

