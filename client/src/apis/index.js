const BASE_URL = domain;

const api = {
  get: (url) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err));
  },

  post: (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err));
  },

  put: (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err));
  },

  delete: () => {},

  postImage: (url, formData) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => Promise.resolve(json))
      .catch((err) => Promise.reject(err));
  },
};

export default api;
