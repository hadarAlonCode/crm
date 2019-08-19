import React, { Component } from 'react';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import Chart4 from './Charts/Chart4';
var moment = require('moment');



class Charts extends Component {


    constructor(){
        super()
        this.state = {
            filterCategory: "Country",
            Category: ["Country", "Email", "Month (all time)", "Owner"]
            }
    }

//chart1

    TopEmployees = () => {
        let soldClients = this.props.clients.filter(c => c.sold)
        let breakdown = {}
        for (let c of soldClients) {
            if (breakdown[c.owner]) {
                breakdown[c.owner] += 1
            } else {
                breakdown[c.owner] = 1
            }
        }
        let arr = Object.values(breakdown);
        let max = Math.max(...arr);
        let topEmployee = Object.keys(breakdown).find(key => breakdown[key] === max);
        let highestThree = []
        for (let i = 0; i < 3; i++) {
            highestThree.push({ name: topEmployee, sales: max })
            delete breakdown[topEmployee]
            arr = Object.values(breakdown)
            max = Math.max(...arr)
            topEmployee = Object.keys(breakdown).find(key => breakdown[key] === max)
        }
        return highestThree
    }


     //chart2 *********filter by *********
    filterChart=(value)=>{
    let soldArray = this.props.clients.filter(c=> c.sold)
     let categoryObj = {}
     for (let c of soldArray) {
         if (categoryObj[c[value]]) {
            categoryObj[c[value]] += 1
         } else {
            categoryObj[c[value]] = 1
         }
     }
     let categoryArr = Object.entries(categoryObj)
    
     let categorySalesArr = categoryArr.map(c => { return {name: c[0], sales: c[1]} })
     return categorySalesArr
    }


     //chart2 ********filter by month*********

    filterMonthChart=()=>{
        let soldArray = this.props.clients.filter(c=> c.sold)
        let monthArr = soldArray.map(m => moment(m.firstContact).format("LL").split(" ")[0])
        
         let categoryObj = {}
         for (let c of monthArr) {
             if (categoryObj[c]) {
                categoryObj[c] += 1
             } else {
                categoryObj[c] = 1
             }
         }
         let categoryArr = Object.entries(categoryObj)
        
         let categorySalesArr = categoryArr.map(c => { return {name: c[0], sales: c[1]} })
         console.log(categorySalesArr);
         return categorySalesArr
        }

        //chart 3 *********sales Since*********

          salesSince =  () => {

            let currentMonth =  moment().format("L").split("/")[0] 
            let currentYear =  moment().format("L").split("/")[2] - 1
            let daysArr =  this.props.clients.filter(c => c.firstContact.split("-")[1] == currentMonth && c.firstContact.split("-")[0] == currentYear.toString() && c.sold).map(c => moment(c.firstContact).format("L").split("/")[1])
            let days = {}
           

            for (let c of daysArr) {
                if (days[c]) {
                    days[c] += 1
                } else {
                    days[c] = 1
                }
            }
            let datesArr = Object.entries(days)
            let newDaysArr = datesArr.map(c => { return { day: c[0], sales: c[1] } })

            return  newDaysArr
        }


    //
    handleInputCategory=(e)=>{
        const value = e.target.value
        this.setState({filterCategory : value})
        }

    render() {
        let category = this.state.filterCategory == "Country" ? this.filterChart("country")
         : this.state.filterCategory == "Email" ? this.filterChart("emailType") 
         : this.state.filterCategory == "Owner" ? this.filterChart("owner") 
         : this.state.filterCategory == "Month (all time)" ? this.filterMonthChart() : null;

        return (
            <div className="chartsSection">
                <div className="chart"><span className="chartTitle">Top Employees</span>
                   <Chart1 TopEmployees={this.TopEmployees()}/>
                </div>
                <div className="chart"><span className="chartTitle">Sales by </span>
                   <select name="filterChart" onInput={this.handleInputCategory}>
                 {this.state.Category.map((c,i) => <option key={i}>{c} </option>)}
                   </select>
                   <Chart2 countriesSalesArr={category}/>
                </div>
                <div className="chart" ><span className="chartTitle">Sales Since "last mounth"</span>
                   <Chart3 saleSince={this.salesSince()} />
                </div>
                <div className="chart"><span className="chartTitle">Client Acquisition</span>
                  <Chart4 />
                </div>
            </div>
        );
    }
}

export default Charts;