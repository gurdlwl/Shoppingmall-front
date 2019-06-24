import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
class Register extends Component {
    state = {
        id: '',
        pw: '',
        checkPW: '',
        name: '',
        tel: '',
        phone: '',
        addrNoStart: '',
        addrNoEnd: '',
        address: '',
        email: '',
        policies: false,
        duplicated: true,
        redirect: false
    };

    render() {
        if (this.state.redirect)
            return <Redirect to='/login'/>;
        return (
            <div className='container'>
                <div className='register-box'>
                    <div><input placeholder='ID' onChange={this.updateID} value={this.state.id}/>
                        <button onClick={this.exists}>CHECK</button>
                    </div>
                    <div><input placeholder='PW' onChange={this.updatePW} type='password' value={this.state.pw}/></div>
                    <div><input placeholder='PW 확인' onChange={this.updateCheckPW} type='password'
                                value={this.state.checkPW}/></div>
                    <div><input placeholder='이름' onChange={this.updateName} value={this.state.name}/></div>
                    <div><input placeholder='전화번호' onChange={this.updateTel} value={this.state.tel}/></div>
                    <div><input placeholder='휴대전화' onChange={this.updatePhone} value={this.state.phone}/></div>
                    <div><input placeholder='우편번호' onChange={this.updateAddrNoStart}
                                value={this.state.addrNoStart}/> - <input onChange={this.updateAddrNoEnd}
                                                                          value={this.state.addrNoEnd}/></div>
                    <div><input placeholder='주소' onChange={this.updateAddress} value={this.state.address}/></div>
                    <div><input placeholder='이메일' onChange={this.updateEmail} value={this.state.email}/></div>
                    <div><label>동의함</label><input placeholder='동의함' onChange={this.updatePoliciesA} type='checkbox'
                                                  checked={this.state.policies}/><label>동의안함</label><input
                        placeholder='동의안함' onChange={this.updatePoliciesD} type='checkbox'
                        checked={!this.state.policies}/></div>
                    <div>
                        <button onClick={this.register}>REGISTER</button>
                    </div>
                </div>
            </div>
        );
    }

    register = async () => {
        if (this.state.id === '') {
            alert('ID IS EMPTY');
            return;
        }

        if (this.state.duplicated) {
            alert('ID DUPLICATED OR UNCHECK');
            return;
        }

        if (this.state.pw !== this.state.checkPW) {
            alert('PASSWORD NOT MATCH');
            return;
        }

        if (this.state.name === '') {
            alert('NAME IS EMPTY');
            return;
        }

        if (this.state.tel === '') {
            alert('TEL IS EMPTY');
            return;
        }

        if (this.state.phone === '') {
            alert('PHONE IS EMPTY');
            return;
        }

        if (this.state.addrNoStart === '' || this.state.addrNoEnd === '') {
            alert('ADDRESS NUMBER NOT FULLY FILLED');
            return;
        }

        if (this.state.address === '') {
            alert('ADDRESS IS EMPTY');
            return;
        }

        if (this.state.email === '') {
            alert('EMAIL IS EMPTY');
            return;
        }

        if (!this.state.policies) {
            alert('NOT AGREE');
            return;
        }

        if (await this.props.stores.userStore.register(this.state.id, this.state.pw, this.state.name, this.state.tel, this.state.phone, this.state.address, this.state.addrNoStart + "-" + this.state.addrNoEnd, this.state.email))
            this.setState({
                ...this.state,
                redirect: true
            });
    };

    exists = async () => {
        let result = await this.props.stores.userStore.exists(this.state.id);
        if (result) {
            alert('DUPLICATED');
        } else {
            alert('OK');
        }
        this.setState({
            ...this.state,
            duplicated: result
        });
    };

    updateID = event => {
        this.setState({
            ...this.state,
            id: event.target.value
        });
    };

    updatePW = event => {
        this.setState({
            ...this.state,
            pw: event.target.value
        });
    };

    updateCheckPW = event => {
        this.setState({
            ...this.state,
            checkPW: event.target.value
        });
    };

    updateName = event => {
        this.setState({
            ...this.state,
            name: event.target.value
        });
    };

    updateTel = event => {
        this.setState({
            ...this.state,
            tel: event.target.value
        });
    };

    updatePhone = event => {
        this.setState({
            ...this.state,
            phone: event.target.value
        });
    };

    updateAddrNoStart = event => {
        this.setState({
            ...this.state,
            addrNoStart: event.target.value
        });
    };

    updateAddrNoEnd = event => {
        this.setState({
            ...this.state,
            addrNoEnd: event.target.value
        });
    };

    updateAddress = event => {
        this.setState({
            ...this.state,
            address: event.target.value
        });
    };

    updateEmail = event => {
        this.setState({
            ...this.state,
            email: event.target.value
        });
    };

    updatePoliciesA = event => {
        this.setState({
            ...this.state,
            policies: event.target.checked
        });
    };

    updatePoliciesD = event => {
        this.setState({
            ...this.state,
            policies: !event.target.checked
        });
    };
}

export default Register;