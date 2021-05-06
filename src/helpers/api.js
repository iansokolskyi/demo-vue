import axios from 'axios';

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = process.env.API_URL || 'http://0.0.0.0:3000';
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