import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect  } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
               <Redirect to={`/clients`} />
            </div>
        );
    }
}

export default Home;