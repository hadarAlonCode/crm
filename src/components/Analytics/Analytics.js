import React, { Component } from 'react';
import Badges from './Badges';
import Charts from './Charts';

class Analytics extends Component {
    render() {

        // let currentMonth = new Date().getMonth() + 1
        // let currentYear = new Date().getFullYear() 
        // console.log(currentMonth);
        
        return (
            <div>
             <Badges clients={this.props.state}/>   
             <Charts clients={this.props.state}/>
               
            </div>
        );
    }
}

export default Analytics;