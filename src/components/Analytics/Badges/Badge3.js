import React, { Component } from 'react';

class Badge3 extends Component {
    render() {
        return (
            <div>
            <div className="badge" id="mounthClient">
               <div className="iconBudge"><i className="fas fa-user"></i></div>
               <div className="numberBudge">{this.props.outstanding}</div>
               <div className="textBudge">Outstanding Clients</div>
           </div>
       </div>
        );
    }
}

export default Badge3;