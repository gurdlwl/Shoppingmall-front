import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {inject, observer} from 'mobx-react';

import './index.scss'

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
                    <input placeholder='아이디' onChange={this.updateID} type="text"  value={this.state.id}/>
                    <div onClick={this.exists}></div>
                    <div><input placeholder='비밀번호' onChange={this.updatePW} type="password" value={this.state.pw}/></div>
                    <div><input placeholder='비밀번호 확인' onChange={this.updateCheckPW} type="password" value={this.state.checkPW}/></div>
                    <div><input placeholder='이름' onChange={this.updateName} type="text"  value={this.state.name}/></div>
                    <div><input placeholder='전화번호' onChange={this.updateTel} type="text"  value={this.state.tel}/></div>
                    <div><input placeholder='휴대전화' onChange={this.updatePhone} type="text"  value={this.state.phone}/></div>
                    <div><input placeholder='우편번호' onChange={this.updateAddrNoStart} type="text" className="postal-code" value={this.state.addrNoStart}/>
                            &nbsp;-&nbsp;<input placeholder='우편번호' onChange={this.updateAddrNoEnd} type="text" className="postal-code" value={this.state.addrNoEnd}/></div>
                    <div><input placeholder='주소' onChange={this.updateAddress} type="text" value={this.state.address}/></div>
                    <div><input placeholder='이메일' onChange={this.updateEmail} type="text" value={this.state.email}/></div>
                    <div>
                        <label>동의함</label>
                        <input placeholder='동의함' onChange={this.updatePoliciesA} type="checkbox" checked={this.state.policies}/>
                        <label>동의안함</label>
                        <input placeholder='동의안함' onChange={this.updatePoliciesD} type="checkbox" checked={!this.state.policies}/>
                    </div>
                    <div>
                        <div className='button' onClick={this.register}>REGISTER</div>
                    </div>
                </div>
            </div>
        );
    }

    register = async () => {
        if (this.state.id === '') {
            alert('아이디를 입력해주세요.');
            return;
        }

        if (this.state.duplicated) {
            alert('ID DUPLICATED OR UNCHECK');
            return;
        }

        if (this.state.pw !== this.state.checkPW) {
            alert('패스워드가 일치하지 않습니다.');
            return;
        }

        if (this.state.name === '') {
            alert('이름을 입력해주세요.');
            return;
        }

        if (this.state.tel === '') {
            alert('전화번호를 입력해주세요.');
            return;
        }

        if (this.state.phone === '') {
            alert('휴대전화번호를 입력해주세요.');
            return;
        }

        if (this.state.addrNoStart === '' || this.state.addrNoEnd === '') {
            alert('우편번호를 입력해주세요.');
            return;
        }

        if (this.state.address === '') {
            alert('주소를 입력해주세요.');
            return;
        }

        if (this.state.email === '') {
            alert('이메일을 입력해주세요.');
            return;
        }

        if (!this.state.policies) {
            alert('약관에 동의하지 않았습니다.');
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
            alert('이미 사용중인 아이디입니다.');
        } else {
            alert('사용할 수 있는 아이디입니다.');
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