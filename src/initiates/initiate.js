import localforage from 'localforage';

export const LOCALFORAGE_INITIATE = () => {
    try {
        const isLocalforageSetup = localforage.config({
            driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
            name: import.meta.env.VITE_APP_LOCALFORAGE_NAME,
            size: Number(import.meta.env.VITE_APP_LOCALFORAGE_SIZE),
            storeName: import.meta.env.VITE_APP_LOCALFORAGE_STORENAME,
            description: import.meta.env.VITE_APP_LOCALFORAGE_DESCRIPTION,
        });

        if (!isLocalforageSetup) {
            throw new Error("[Error] Localforage can't setup correctly.");
        }
    } catch (err) {
        console.log(err);
    }
};
