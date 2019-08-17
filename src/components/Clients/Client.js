import React, { Component } from 'react';
import Popup from "reactjs-popup";

var moment = require('moment');


class Client extends Component {

    constructor(props) {
        super(props)
        this.state = {
            updateName: props.client.name.split(' ')[0],
            updateSurname: props.client.name.split(' ')[1],
            updateCountry: props.client.country,
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

    capitalFirstChart(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
        }

    updateClient=()=>{
        return this.props.upatePopUpInfo(this.state.updateName, this.state.updateSurname, this.state.updateCountry, this.props.client._id)    
    }


    handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: this.capitalFirstChart(value) })
    }

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
                          <div className="contentPopup"><span>Name:</span><input placeholder=" Update Name.." className="input" name="updateName" type="text" onInput={this.handleInput}></input></div>
                          <div className="contentPopup"><span>Surname:</span> <input placeholder=" Update Suname.." name="updateSurname" type="text" onInput={this.handleInput}></input></div>
                          <div className="contentPopup" ><span>country:</span> <input placeholder=" Update Country.." name="updateCountry" type="text" onInput={this.handleInput}></input></div>      
                           </div>
                        <div className="actions">  
                        <div id="Button" onClick={this.updateClient} className="popButton"> Update </div>     
                        </div>
                    </div>
                )}
            </Popup>
            // <div class="wrapper"> <input class="input" placeholder="Please Enter Text" type="text" ><span class="underline"></span></div>
        );
    }
}

export default Client;

