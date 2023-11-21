import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    AsyncStorage.getItem(`${this.namespace}: accessToken`)
  }

  setAccessToken(accessToken) {
    AsyncStorage.setItem(`${this.namespace}: accessToken`, accessToken)
  }

  removeAccessToken() {
    AsyncStorage.removeItem(`${this.namespace}: accessToken`)
  }
}

export default AuthStorage;