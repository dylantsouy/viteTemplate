import * as localforage from 'localforage';
import { apiUrl } from './apiSetup';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
    const token = await localforage.getItem('token');

    const res = await axios({
        url: url,
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + token,
        },
    });

    if (res.status !== 200) {
        const error = {
            ...new Error('Some error is happened'),
            info: res.data.message,
            status: res.status,
        };
        throw error;
    }

    const productsData = res.data;

    return productsData;
};

const useProducts = () => {
    const { data, error } = useSWR([`${apiUrl}/products`], fetcher);

    return {
        productsData: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useProducts;
