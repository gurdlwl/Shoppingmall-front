import {observable, action} from 'mobx';
import axios from 'axios'
import App from "../App";

class UserStore{
    static __instance = null;

    static getInstance() {
        if (UserStore.__instance == null) {
            UserStore.__instance = new UserStore();
        }
        return UserStore.__instance;
    }

    constructor(){
        UserStore.__instance = this;
    }

    @observable user = null;
    @action login = async (account, password) => {
        try{
            let response = await axios({
                url: 'http://localhost:8080/user/loginUser',
                method: 'post',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify({
                    account: account,
                    password: password
                }),
                timeout:3000
            });

            if(response.status === 200){
                this.user = response.data;
            } else {
                this.user = null;
            }
            return;

        } catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @action register = async (id, account, password, name, callNumber, phoneNumber, email, address, postalCode) =>{
        try{
            let response = await axios({
                url: 'http://localhost:8080/user/postUser',
                method: 'post',
                headers: {
                    'content-type': 'application/json; charset=UTF-8'
                },
                data: JSON.stringify({
                    id: id,
                    account: account,
                    password: password,
                    name: name,
                    callNumber: callNumber,
                    phoneNumber: phoneNumber,
                    email: email,
                    address: address,
                    postalCode: postalCode
                }),
                timeout: 3000
            });
            if(response.status == 200)
                return true;
        } catch (e) {
            alert(e.toLocaleString());
            return false;
        }
    };

    @action exists = async (id) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/user/getUserById/${id}`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'GET',
                timeout: 3000
            });
            return response.data;
        } catch (e) {
            alert(e.toString());
            return false;
        }
    }

}

export default UserStore.getInstance();