import React, { Component } from "react";
class Filter extends Component {
   constructor() {
       super()
       this.state = {
           category: "owner",
        //    name: "",
        //    country: "",
        //    sold: "",
        //    email: "",
        //    owner: ""
       }
   }
   handleInput = (e) => {
      if ( this.state.category == "sold" ){ e.target.value = true }
       this.props.filter(e.target.value, this.state.category)
   }
   handlSelect = (e) => {
       let value = e.target.value.toLowerCase()
       this.setState({ category: value })
   }
   render() {
       return (
           <div className="mainFilter">
               <input id="input" value={this.props.value} placeholder="Search" onChange={this.handleInput}></input>
               <select onInput={this.handlSelect}>
                   <option>Owner</option>
                   <option>Name</option>
                   <option>Email</option>
                   <option>Sold</option>
                   <option>Country</option>
               </select>
           </div>
       );
   }
}

export default Filter;
