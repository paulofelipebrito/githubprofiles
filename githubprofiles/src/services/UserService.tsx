import HttpClient from './utils/API';

class UserService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient();
  }

  async listUser(username: string) {
    return this.httpClient.get(username);
  }
}

export default new UserService();


