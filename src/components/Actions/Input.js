import React, { Component } from 'react';

class Input extends Component {
    constructor(){
        super()
        this.state = {
            name: ""
        }
    }

    handleInput=(e)=>{
        const value = e.target.value
        this.setState({name : value})
        this.props.getName(value)
        }




    render() {
        return (

            <div>
                <input id="input" list="browsers" name="browser" placeholder="Search Name..." onInput={this.handleInput} required ></input>
                <datalist id="browsers">
                {this.props.clients.filter( c => c.name.toLowerCase().includes(this.state.name.toLowerCase())).map(m =><option> {m.name} </option>)}
                </datalist>
              
            </div>
        );
    }
}

export default Input;