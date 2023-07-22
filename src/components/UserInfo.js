export class UserInfo {
  constructor(userConfig) {
    this._name = document.querySelector(userConfig.nameSelector);
    this._description = document.querySelector(userConfig.descriptionSelector);
    this._avatar = document.querySelector(userConfig.avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    };
  }
  setUserInfo({ name, about }) {
    this._name.textContent = name;
    this._description.textContent = about;
  }
  setUserAvatar(item) {
    this._avatar.src = item.avatar;
  }
}
