import React, { Component } from 'react';
import Badge1 from './Badges/Badge1';
import Badge2 from './Badges/Badge2';
import Badge3 from './Badges/Badge3';
import Badge4 from './Badges/Badge4';
var moment = require('moment');

class Badges extends Component {

  // *****Badge 1 - new Month*****
  newMounthClienats = () => {
    let currentMonth = moment().format("L").split('/')[0]
    let currentYear = new Date().getFullYear() - 1
    let newMC = this.props.clients.filter(c => c.firstContact.split("-")[0] === currentYear.toString() && c.firstContact.split("-")[1] === currentMonth)
    return newMC
  }

  // *****Badge 2 -mails sent*****
  emailSent = () => {
    return this.props.clients.filter(c => c.emailType !== null).length
  }

    // *****Badge 3 -outstanding Clients*****

  outstanding = () => {
    return this.props.clients.filter(c => c.sold == false).length
  }


   // ******hottest country******
  hottestCountry =() => {
    let breakdown = {}
    for (let c of this.props.clients) {
      if (breakdown[c.country]) {
        breakdown[c.country] += 1
      } else {
        breakdown[c.country] = 1
      }
    }

    let arrV = Object.values(breakdown);
    let max = Math.max(...arrV);
    return Object.keys(breakdown).find(key => breakdown[key] === max);
  }


  render() {

    let currentMonthString = moment().format("LLL").split(' ')[0]

    return (
      <div className="badgesSection">
        <Badge1 newMounthClienats={this.newMounthClienats()} currentMonthString={currentMonthString} />
        <Badge2 emailSent={this.emailSent()} />
        <Badge3 outstanding={this.outstanding()} />
        <Badge4 hottest={this.hottestCountry()} />
      </div>
    );
  }
}

export default Badges;