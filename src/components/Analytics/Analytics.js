import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';

class Analytics extends Component {
    render() {

        
        return (
            <div>
             <Badges clients={this.props.state}/>   
             <Charts clients={this.props.state}/>
               
            </div>
        );
    }
}

export default Analytics;