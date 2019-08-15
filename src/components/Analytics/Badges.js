import React, { Component } from 'react';
import Badge1 from './Badges/Badge1';
import Badge2 from './Badges/Badge2';
import Badge3 from './Badges/Badge3';
import Badge4 from './Badges/Badge4';

var moment = require('moment');

class Badges extends Component {
    render() {

        // new Month ==
        let currentMonthString = moment().format("LLL").split(' ')[0]
        let currentMonth = moment().format("L").split('/')[0]
        let currentYear = new Date().getFullYear() - 1
        let newMounthClienats = this.props.clients.filter(c => c.firstContact.split("-")[0] === currentYear.toString() && c.firstContact.split("-")[1] === currentMonth)

        // mails sent
        let emailSent = this.props.clients.filter(c => c.emailType !== null ).length

        // outstanding Clients
        let outstanding = this.props.clients.filter(c => c.sold == false ).length
        

        //hottest country
        let breakdown = {}
           for(let c of this.props.clients){
             if(breakdown[c.country]){
               breakdown[c.country] += 1
             } else {
               breakdown[c.country] = 1
             }
           }

            let arrV = Object.values(breakdown);
            let max = Math.max(...arrV);
            let hottest =  Object.keys(breakdown).find(key => breakdown[key] === max);
            

        return (
            <div className="badgesSection">
                <Badge1 newMounthClienats={newMounthClienats} currentMonthString={currentMonthString}/>
                <Badge2 emailSent={emailSent} />
                <Badge3 outstanding={outstanding} />
                <Badge4 hottest={hottest} />
            </div>
        );
    }
}

export default Badges;