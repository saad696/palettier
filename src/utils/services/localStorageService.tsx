export const localStorageService = {
    setItem<T>(key: string, value: T) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem<T>(key: string): T {
        return localStorageService.getItem(key);
    },
    removeItem(key: string) {
        localStorage.removeItem(key)
    }
};
