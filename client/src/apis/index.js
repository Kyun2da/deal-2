const BASE_URL = 'http://localhost:3000/api';

const api = {
  get: (url) => {},

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

  put: (url, data) => {},

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
