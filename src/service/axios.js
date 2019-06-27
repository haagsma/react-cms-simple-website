import axios from 'axios';

class Http {

    url = '/api';

    get(url){
        return axios.get(this.url+url);
    }

    post(url, dados){
        return axios.post(this.url+url, dados);
    }

}
const http = new Http();
export default http;
