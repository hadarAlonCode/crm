import React, { Component } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data = [
  { name: "Last Month", value: 100 }, 
  { name: 'Last 6 Months', value: 300 }, 
  { name: 'Last Year', value: 500 }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    class Chart4 extends Component {
        
  render() {
    return (
      <PieChart width={480} height={480}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80}
         fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    );
  }
}

    


export default Chart4;