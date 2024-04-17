import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Home extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {
        return (
            <div className="wrapper">
                {!this.props.isLoggedIn && <Navigate to="/login" />}
                {/* Content goes here */}
            </div>
        )
    }
}

export default Home;