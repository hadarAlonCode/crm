import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className="navBar">
                 <Link to={`/clients`}>Clients</Link>
                 <Link to={`/actions`}>Actions</Link>
                 <Link to={`/analytics`}>Analytics</Link>
            </div>
        );
    }
}

export default Navbar;