import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from "react-router-dom";

import './index.scss'

@inject('stores')
@observer
class Login extends Component {

    state = {
        account: '',
        password: '',
        onLogin: false,
        onRegister: false
    };

    render() {

        if (this.state.onLogin)
            return <Redirect to="/"/>;
        if (this.state.onRegister)
            return <Redirect to="/register"/>;

        return (
            <div className="container">
                <div id='welcome'>환영합니다.</div>
                <div className="login-box">
                    <div><input type="text" placeholder="ID" onChange={this.updateID} value={this.state.account}/></div>
                    <div><input type="password" placeholder="PW" onChange={this.updatePW} value={this.state.password}/></div>
                    <div>
                        <div className='button' onClick={this.login}>LOGIN</div>
                        <div className='button' onClick={this.register}>REGISTER</div>
                    </div>
                </div>
            </div>
        );
    }

    login = async () => {
        let result = await this.props.stores.userStore.login(this.state.account, this.state.password);

        if (result)
            this.setState({
                onLogin: true
            });
    };

    register = () => {
        this.setState({
            onRegister: true
        });
    };

    updateID = event => {
        this.setState({
            ...this.state,
            account: event.target.value
        });
    };

    updatePW = event => {
        this.setState({
            ...this.state,
            password: event.target.value
        });
    };
}

export default Login;