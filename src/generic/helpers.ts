export const setLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const removeLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const keyExists = (key: string): boolean => {
  return !!localStorage.getItem(key);
};
