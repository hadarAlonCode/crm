import React, { Component } from 'react';


class Add extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            Surname: "",
            Country: "",
            Owner: ""
        }
    }

    
    capitalFirstChart(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
        }

    handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: this.capitalFirstChart(value) })
    }

    validate = () => {
        if (this.state.firstName === "" || this.state.Surname === "" || this.state.Country === "" || this.state.Owner === "") {
            return true
        } else {
            return false
        }
    }

    addNewClient = (e) => {
        if (this.validate()) {
            return alert("All fields must be filled")
        } else {
            this.props.addClient({
                name: `${this.state.firstName} ${this.state.Surname}`,
                country: this.state.Country,
                owner: this.state.Owner,
                firstContact: new Date(),
                sold: false,
                emailType: null,
                email: ""
            });
        }


    }

    render() {
        return (
            <div>
                <div className="actionInputSections">First name  <input id="input" name="firstName" placeholder="First name..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Surname<input id="input" name="Surname" placeholder="Surname..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Country<input id="input" name="Country" placeholder="Country..." onInput={this.handleInput} required ></input></div>
                <div className="actionInputSections">Owner<input id="input" name="Owner" placeholder="Owner..." onInput={this.handleInput} required ></input></div>
                <div className="addButton" id="Button" onClick={this.addNewClient}>Add New Client</div>


            </div>
        );
    }
}

export default Add;