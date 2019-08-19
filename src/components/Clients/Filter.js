import React, { Component } from "react";
class Filter extends Component {
   constructor() {
       super()
       this.state = {
           category: "name",
       }
   }
   handleInput = (e) => {
       this.props.filter(e.target.value, this.state.category)
   }

   handlSelect = (e) => {
        let value = e.target.value
        if(value === "sold"){
            this.props.filter(true, "sold")
        } else {
            this.setState({ category: value })
        }
   }
   render() {
       return (
           <div className="mainFilter">
               <input id="input"  placeholder="Search" onChange={this.handleInput}></input>
               <select onInput={this.handlSelect}>
               <option value="name">Name</option>
               <option value="owner">Owner</option>
                   <option value="emailType">Email type</option>
                   <option value="sold">Sold</option>
                   <option value="country">Country</option>
               </select>
           </div>
       );
   }
}

export default Filter;
