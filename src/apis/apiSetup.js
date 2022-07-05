// To do >>>>> add a file in apis folder root apiSetup.js
// to detect REACT_APP_ENV if local, (use js method, window.location.hostname)
// then get the url from local, else get the url from the real url

export const urlDeterminator = () => {
    let env = import.meta.env.VITE_APP_ENV;
    let endpoint = `VITE_APP_API_${env.toUpperCase()}_URL`;

    return import.meta.env[endpoint];
};

export const apiUrl = urlDeterminator();
