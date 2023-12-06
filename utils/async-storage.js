import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncStorageItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log('Item set : ', key);
    } catch (e) {
        console.log('Error while setting async storage:', e);
    }
};

export const setAsyncStorageObjectItem = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('Item set : ', key);
    } catch (e) {
        console.log('Error while setting async storage:', e);
    }
};

export const getAsyncStorageItem = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key);
        console.log("Async get data", key, ":", data);
        return data;
    } catch (error) {
        console.log('Error while getting async storage:', error);
    }
};

export const getAsyncStorageObjectItem = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        console.log("Async get data", key, ":", data);
        return data;
    } catch (error) {
        console.log('Error while getting async storage:', error);
    }
};

export const removeAsyncStorageItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log("Item removed : ", key);
    } catch (error) {
        console.log('Error while removing async storage:', error);
    }
};