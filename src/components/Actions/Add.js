import React, { Component } from 'react';
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Add extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            surname: "",
            country: "",
            owner: ""
        }
    }


    capitalFirstChart(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: this.capitalFirstChart(value) })
    }

    validate = () => {
        if (this.state.firstName === "" || this.state.surname === "" || this.state.country === "" || this.state.owner === "") {
            return true
        } else {
            return false
        }
    }

    addNewClient = (e) => {
        if (this.validate()) {
            return ToastsStore.error("All fields must be filled")
        } else {
            this.props.addClient({
                name: `${this.state.firstName} ${this.state.surname}`,
                country: this.state.country,
                owner: this.state.owner,
                firstContact: new Date(),
                sold: false,
                emailType: null,
                email: ""
            });
            ToastsStore.success("Add new client!")
        }
    }

    render() {
        return (
            <div>
                <div className="actionInputSections">First name  <input id="input" name="firstName" placeholder="First name..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Surname<input id="input" name="surname" placeholder="Surname..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Country<input id="input" name="country" placeholder="Country..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Owner<input id="input" name="owner" placeholder="Owner..." onInput={this.handleInput} required ></input></div>
                <div className="addButton" id="Button" onClick={this.addNewClient}>Add New Client</div>
            </div>
        );
    }
}

export default Add;