import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = 'http://koa-lb-2113149578.eu-central-1.elb.amazonaws.com/';
  }

  get(url) {
    const config = {
      headers: {
        'Authorization': `JWT ${window.localStorage.getItem('token')}`
      }
    }
    console.log(config)
    return this.http.get(url, config);
  }

  post(url, body) {
    return this.http.post(url, body);
  }
}

export default new ApiService();