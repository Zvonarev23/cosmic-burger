export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok
    ? res.json()
    : res.json().then((error) => Promise.reject(error));
};
