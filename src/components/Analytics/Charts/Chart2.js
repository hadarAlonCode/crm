import React, { Component } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', sales: 4000, 
    },
    {
        name: 'Page B', sales: 3000,  
    },
    {
        name: 'Page C', sales: 2000,  
    },
    {
        name: 'Page D', sales: 2780,
    },
    {
        name: 'Page E', sales: 1890,  
    },
    {
        name: 'Page F', sales: 2390, 
    },
    {
        name: 'Page G', sales: 3490,  
    },
];



class Chart2 extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: this.props.countriesArr
    //       }
    // }

    
    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
        );
    }
}

export default Chart2;