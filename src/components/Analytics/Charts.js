import React, { Component } from 'react';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import Chart4 from './Charts/Chart4';

class Charts extends Component {


//chart1
    TopEmployees = () => {
        let arr1 = this.props.clients.filter(c => c.sold)
        let breakdown = {}
        for (let c of arr1) {
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
            highestThree.push({ name: topEmployee, sell: max })
            delete breakdown[topEmployee]
            arr = Object.values(breakdown)
            max = Math.max(...arr)
            topEmployee = Object.keys(breakdown).find(key => breakdown[key] === max)
        }
        return highestThree
    }


    render() {

       
    

        //chart2
        let countries = {}
        for (let c of this.props.clients) {
            if (countries[c.country]) {
                countries[c.country] += 1
            } else {
                countries[c.country] = 1
            }
        }

        // let countryName = Object.keys(countries);
        // let countriesSales = Object.values(countries);
        // console.log(countryName);
        // console.log(countriesSales);

        let countriesArr = Object.entries(countries)
        // let arr = countriesArr.map(c => { {name: c[0], sales: c[1]} })



        return (
            <div className="chartsSection">
                <div className="chart">Top Employees
                <Chart1 TopEmployees={this.TopEmployees()}/>
                </div>
                <div className="chart">Sales by Country
                <Chart2 countriesArr={countriesArr}/>
                </div>
                <div className="chart">Sales Since "last mounth"
                <Chart3 />
                </div>
                <div className="chart">Client Acquisition
               <Chart4 />
                </div>
            </div>
        );
    }
}

export default Charts;