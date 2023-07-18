
export class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._checkResponse = ((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })
    .then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
    .then((res) => this._checkResponse(res));
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then((res) => this._checkResponse(res));
  }

  sendNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => this._checkResponse(res));
  }

  deleteCard(cardID) {
    return fetch(`${this._url}/cards/${cardID}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  setLike(cardID) {
    return fetch(`${this._url}/cards/${cardID}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res));
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardID}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._checkResponse(res));
  }

  updateAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then((res) => this._checkResponse(res));
  }
}