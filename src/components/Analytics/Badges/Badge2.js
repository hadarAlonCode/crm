import React, { Component } from 'react';

class Badge2 extends Component {
    render() {
        return (
            <div>
                 <div className="badge" id="mounthClient">
                    <div className="iconBudge"><i className="fas fa-envelope"></i></div>
                    <div className="numberBudge">{this.props.emailSent}</div>
                    <div className="textBudge">Emails Sent</div>
                </div>
            </div>
        );
    }
}

export default Badge2;