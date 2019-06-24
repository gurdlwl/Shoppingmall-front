import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

import './index.scss'

class Index extends Component {

    state = {
        onLogin: false,
        onRegister: false
    };

    render() {

        if (this.state.onLogin === false)
            return <Redirect to="/login"/>;

        return (
            <div>
                Welcome
            </div>
        );
    }
}

export default Index;