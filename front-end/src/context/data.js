export default class Data {
  async api(
    path,
    method = 'GET',
    body = null,
    authToken,
    requiresAuth = false
  ) {
    let options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      options.headers['Authorization'] = `Bearer ${authToken}`;
    }

    return fetch('http://localhost:5000/api' + path, options);
  }

  async getUser(email, password) {
    const res = await this.api('/auth', 'POST', { email, password });

    if (res.status === 200) {
      return await res.json();
    } else if (res.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  async createUser(email, password) {
    const body = { email, password };
    const res = await this.api('/users', 'POST', body);

    if (res.status === 201) {
      const userInfo = await res.json();
      return { ...userInfo, created: true, errors: [] };
    } else if (res.status === 400) {
      const data = await res.json();
      const messages = await data.error.message;
      return { created: false, errors: messages };
    } else {
      throw new Error();
    }
  }
}
