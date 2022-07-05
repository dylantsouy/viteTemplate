import React from 'react';
import { useSelector } from 'react-redux';
import Product from '@/components/Product';

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <div>
            <Product />
        </div>
    );
};

export default ProductListing;
