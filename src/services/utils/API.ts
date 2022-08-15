class HttpClient {
   baseURL: string = 'https://api.github.com/users/';
   consturctor(baseURL: string){
     this.baseURL = baseURL;
   }

   async get(path:string) {
    const response = await fetch(`${this.baseURL}${path}`);
    let body = null;

    const contentType = response.headers.get('Content-Type');
    if (contentType!.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    return null;
  }
};
export default HttpClient;