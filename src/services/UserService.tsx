import HttpClient from './utils/API';

class UserService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient();
  }

  async listUser(username: string) {
    return this.httpClient.get(username);
  }

  async listRepos(username: string) {
    const response = await this.httpClient.get(`${username}/repos`);

    const loadedRepos = [];

    for(const key in response){
      loadedRepos.push({
        id: key,
        name: response[key].name,
        html_url: response[key].html_url,
        created_at: response[key].created_at
      })
    }
    return loadedRepos;
  }
}

export default new UserService();


