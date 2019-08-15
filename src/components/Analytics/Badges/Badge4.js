import React, { Component } from 'react';

class Badge4 extends Component {
    render() {
        return (
            <div>
            <div className="badge">
               <div className="iconBudge"><i className="fas fa-globe-africa"></i></div>
               <div className="numberBudge">{this.props.hottest} </div>
               <div className="textBudge">Hottest Country</div>
         </div>
       </div>
        );
    }
}

export default Badge4;