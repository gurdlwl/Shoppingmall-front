import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router-dom'

@inject('stores')
@observer
class Index extends Component {

    state = {
        account: '',
        password: '',
        goToLogin: true,
        goToRegister: true
    };

    render() {
        if(this.state.goToLogin)
            return <Redirect to="/login" />
        if(this.state.goToRegister)
            return <Redirect to="/register" />

        return (
            <div>
                <div><input type="text" placeholder="ID" onChange={this.updateID} value={this.state.account}/></div>
                <div><input type="text" placeholder="PassWord" onChange={this.updatePW} value={this.state.password}/></div>
                <div>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        );
    }

    login = async() => {
        let result = await this.props.stores.userStore.login(this.state.account, this.state.password);

        if(result)
            this.setState({goToLogin:false});
    };

    register = () => {
        this.setState({goToRegister:false});
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

export default Index;