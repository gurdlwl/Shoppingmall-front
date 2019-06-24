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

}

export default UserStore.getInstance();