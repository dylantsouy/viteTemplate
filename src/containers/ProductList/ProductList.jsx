import React from 'react';
import Product from '@/components/Product';
import useProducts from '@/apis/useProducts';

const ProductList = () => {
    const { productsData, isLoading, isError } = useProducts();
    if (isLoading) return <div>Loading</div>
    if (isError) return <div>isError</div>
    return (
        <div className='grid grid-cols-2 gap-5 m-3 pb-10'>
            {productsData.map(e => <Product productData={e} key={e.id} />)}
        </div>
    );
};

export default ProductList;
