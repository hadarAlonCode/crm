import React, { Component } from 'react';
import Input from './Input';

class Update extends Component {

    constructor(){
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
       for(let c of array){
         if(obj[c[key]]){
            obj[c[key]] = c[key]
         } else {
            obj[c[key]] = c[key]
         }
       }
       return Object.entries(obj)           
    }

    //get client name from input component
    getName=(name)=>{
        this.setState({ updateName: name }) 
        
    }

    getClientId(){
        let client = this.props.clients.find(c=> c.name.toLowerCase() == this.state.updateName.toLowerCase())
        if (!client){
            return null
        }
        return client._id
    }

    getupdateOwner=()=>{
        if (!this.getClientId()){
            return alert("need to put name")
        }
        this.props.update(this.getClientId(), this.state.upadeOwner, this.state.updateName )
    }

    getupdateEmailType=()=>{
        if (!this.getClientId()){
            return alert("need to put name")
        }
        this.props.update(this.getClientId(),this.state.upadeEmailType, this.state.updateName )
    }
     
    

    getupdateDeclare=()=>{
        if (!this.getClientId()){
            return alert("need to put name")
        }
        this.props.update(this.getClientId(),this.state.sold, this.state.updateName ) 
    }

    handleInputOwner=(e)=>{
        const value = e.target.value
        const name = e.target.name
        this.setState({[name] : value})
        }


    render() {
        return (
            <div>
               <Input clients={this.props.clients} getName={this.getName}  />
               <div>
                   <span>Transfer ownership to</span>
                   <select name="upadeOwner" onInput={this.handleInputOwner}>
                   {this.duplicates(this.props.clients, "owner" ).map((c,i) => <option key={i}>{c[0]} </option>)}
                   </select>
                   <button onClick={this.getupdateOwner} >TRANSFER</button>
               </div>
               <div>
                   <span>Send Email</span>
                   <select name="upadeEmailType" onInput={this.handleInputOwner}>
                   {this.duplicates(this.props.clients, "emailType" ).map((c,i) => <option key={i}>{c[0]} </option>)}
                   </select>
                   <button onClick={this.getupdateEmailType}>SEND</button>
               </div>
               <div>
                   <span>Declare Sale!</span>
                   
                   <button onClick={this.getupdateDeclare}>DECLARE</button>
               </div>
               <div></div>
               <div></div>
           </div>
        );
    }
}

export default Update;