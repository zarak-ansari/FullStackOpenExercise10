import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        const result = await AsyncStorage.getItem(`${this.namespace}:token`)
        return result ? JSON.parse(result) : ''
    }

    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken))

    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:token`)
    }
}

export default AuthStorage;