import React, { Component } from 'react';

class Badge1 extends Component {
    render() {
        return (
            <div>
                 <div className="badge" id="mounthClient">
                    <div className="iconBudge"><i className="fas fa-chart-line"></i></div>
                    <div className="numberBudge">{this.props.newMounthClienats.length} </div>
                    <div className="textBudge">New {this.props.currentMonthString} Clients</div>
              </div>
            </div>
        );
    }
}

export default Badge1;