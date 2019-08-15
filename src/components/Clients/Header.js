import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div id="header">
             <div>Name</div>
               <div>Surname</div> 
               <div>Country</div>
               <div>First Contact</div>
               <div>Email</div>
               <div>Sold</div>
               <div>Owner</div>   
            </div>
        );
    }
}

export default Header;