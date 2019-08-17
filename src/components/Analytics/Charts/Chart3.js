import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  // const data = [
  //   {
  //     name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  //   },
  //   {
  //     name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  //   },
  // ]

  

class Chart3 extends Component {
  
    render() {
      console.log(this.props.saleSince);

         return (
            <LineChart
              width={500}
              height={300}
              data={this.props.saleSince}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
              {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          );
    }
}

export default Chart3;