/* Simple fetcher function that accepts a URL, makes a fetch request and returns data in JSON format */
const fetcher = async (url) => {
    const response = await fetch(url);
    return response.json();
};
/* Cache to store fetch result, which can be a promise, error or data */
const cache = new Map();
/* Suspends the rendering by throwing a promise. Returns the result (data or error) when thrown promise settles */
export const useFetch = (url) => {
    if (cache.has(url)) {
        const { promise, data, error } = cache.get(url);
        if (promise)
            throw promise;
        if (error)
            throw error;
        else
            return data;
    }
    /** aka suspender */
    const promise = fetcher(url)
        .then((data) => cache.set(url, { data }))
        .catch((error) => cache.set(url, { error }));
    cache.set(url, { promise });
    throw promise;
};
