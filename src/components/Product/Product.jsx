import React from 'react';
import useProducts from '@/apis/useProducts';

const Product = () => {
    const { productsData, isLoading, isError } = useProducts();

    return (
        <div>
            <div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Product;
