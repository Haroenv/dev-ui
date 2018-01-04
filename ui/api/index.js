export const getJson = path => fetch(path).then(response => response.json());

export const getStream = path => fetch(path).then(response => response.body.getReader());
