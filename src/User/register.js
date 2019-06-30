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
        terms: false,
        duplicated: false,
        redirect: false
    };

    render() {
        if (this.state.redirect)
            return <Redirect to='/login'/>;
        return (
            <div className='container'>
                <div className='terms'>※가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객 서비스를 통해 고객 만족을 최우선으로 합니다.
                쇼핑몰에 가입하시면 보다 나은 서비스로 편리하게 이용하실 수 있습니다.</div>

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

                    <div className='terms'>[필수]이용약관 동의</div>
                    <div><textarea cols='100' rows='10'  readOnly='readOnly' value="국교는 인정되지 아니하며, 종교와 정치는 분리된다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를 진다.
                            법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 군사재판을 관할하기 위하여 특별법원으로서 군사법원을 둘 수 있다. 국무총리는 국회의 동의를 얻어 대통령이 임명한다. 대통령은 제4항과 제5항의 규정에 의하여 확정된 법률을 지체없이 공포하여야 한다.
                            제5항에 의하여 법률이 확정된 후 또는 제4항에 의한 확정법률이 정부에 이송된 후 5일 이내에 대통령이 공포하지 아니할 때에는 국회의장이 이를 공포한다.제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다.에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.
                            국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 국회의원의 선거구와 비례대표제 기타 선거에 관한 사항은 법률로 정한다.대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다.
                            공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 법관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니하며, 징계처분에 의하지 아니하고는 정직·감봉 기타 불리한 처분을 받지 아니한다.
                            이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다. 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다.
                            선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당 또는 후보자에게 부담시킬 수 없다. 국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.
                            대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다. 평화통일정책의 수립에 관한 대통령의 자문에 응하기 위하여 민주평화통일자문회의를 둘 수 있다."/>
                    </div>

                    <div>
                        <label>위 약관에 동의하십니까?</label>
                        <input placeholder='동의함' onChange={this.updateTerms} type="checkbox" checked={this.state.terms}/>
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
            alert('아이디를 체크해주세요.');
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

        if (!this.state.terms) {
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

    updateTerms= event => {
        this.setState({
            ...this.state,
            terms: event.target.checked
        });
    };
}

export default Register;