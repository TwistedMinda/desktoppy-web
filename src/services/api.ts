export const API_BASE = 'http://127.0.0.1:5000';

export const getImageForName = (name: string) => `${API_BASE}/images?name=${name}`;
