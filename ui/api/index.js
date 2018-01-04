export const get = path => fetch(path).then(response => response.json());
