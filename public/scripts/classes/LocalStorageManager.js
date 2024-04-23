export default class LocalStorageManager {
    static read(key) {
        const item = localStorage.getItem(key);

        if (item) return JSON.parse(item);

        return null;
    }

    static write(key, value) {
        const now = Date.now();
        const item_stringified = JSON.stringify({ payload: value, iat: now });

        if (item_stringified) localStorage.setItem(key, item_stringified);
    }
}
