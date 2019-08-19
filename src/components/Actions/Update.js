import React, { Component } from 'react';
import Input from './Input';
import {ToastsContainer, ToastsStore} from 'react-toasts';


// import Popup from "reactjs-popup";

class Update extends Component {

    constructor() {
        super()
        this.state = {
            updateName: "",
            upadeOwner: "",
            upadeEmailType: "",
            sold: true
        }
    }

    //check duplicat client
    duplicates = (array, key) => {
        let obj = {}
        for (let c of array) {
            if (obj[c[key]]) {
                obj[c[key]] = c[key]
            } else {
                obj[c[key]] = c[key]
            }
        }
        return Object.entries(obj)
    }

    //get client name from input component
    getName = (name) => {
        this.setState({ updateName: name })

    }

    getClientId() {
        let client = this.props.clients.find(c => c.name.toLowerCase() == this.state.updateName.toLowerCase())
        if (!client) {
            return null
        }
        return client._id
    }

    getupdateOwner = () => {
        if (!this.getClientId()) {
            return  ToastsStore.error("Customer name must be filled")
        }
        this.props.update(this.getClientId(), "owner", this.state.upadeOwner)
        ToastsStore.success("Owner updated!")
    }

    getupdateEmailType = () => {
        if (!this.getClientId()) {
            return  ToastsStore.error("Customer name must be filled")
        }
        this.props.update(this.getClientId(), "emailType", this.state.upadeEmailType)
        ToastsStore.success("Email Type updated!")

    }

    getupdateDeclare = () => {
        if (!this.getClientId()) {
            return  ToastsStore.error("Customer name must be filled")
        }
        this.props.update(this.getClientId(), "sold", true)
        ToastsStore.success("Client updated as sold!")

    }

    handleInputOwner = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value })
    }

    //  PopupExample = () => (
    //     <Popup trigger={<button> Trigger</button>} position="right center">
    //       <div>Popup content here !!</div>
    //     </Popup>
    //   );

    render() {
        return (
            <div>
                <Input clients={this.props.clients} getName={this.getName} />

                <div className="updateSection">
                    <span>Transfer ownership to </span>
                    <select name="upadeOwner" onInput={this.handleInputOwner}>
                        {this.duplicates(this.props.clients, "owner").map((c, i) => <option key={i}>{c[0]} </option>)}
                    </select>
                <span id="Button" className="actionButton" onClick={this.getupdateOwner} >TRANSFER</span>
                </div>

                <div className="updateSection">
                    <span>Send Email </span>
                    <select name="upadeEmailType" onInput={this.handleInputOwner}>
                        {this.duplicates(this.props.clients, "emailType").map((c, i) => <option key={i}>{c[0]} </option>)}
                    </select>
                    <span id="Button" className="actionButton" onClick={this.getupdateEmailType}>SEND</span>
                </div>

                <div className="updateSectionSold">
                    <span>Declare Sale! </span>

                    <span id="Button" className="actionButton" onClick={this.getupdateDeclare}>DECLARE</span>
                </div>
                <ToastsContainer store={ToastsStore}/>
                
            </div>
        );
    }
}

export default Update;