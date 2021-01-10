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

    return fetch(path, options);
  }

  async getUser(email, password) {
    const res = await this.api(
      '/users',
      'GET',
      null,
      { email, password },
      true
    );

    if (res.status === 200) {
      const { authToken } = await res.json();

      localStorage.setItem('authToken', authToken);
    } else if (res.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  async createUser(firstName, lastName, emailAddress, password) {
    const body = { firstName, lastName, emailAddress, password };
    const res = await this.api('/user', 'POST', body);

    if (res.status === 201) {
      return { created: true, errors: [] };
    } else if (res.status === 400) {
      const data = await res.json();
      const messages = await data.error.message;
      return { created: false, errors: messages };
    } else {
      throw new Error();
    }
  }
}
