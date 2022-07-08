import React from 'react';
import Product from '@/components/Product';
import useProducts from '@/apis/useProducts';

const ProductList = () => {
    const { data, isLoading, isError } = useProducts();

    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>isError</div>;
    return (
        <div>
            <div className='productList'>
                {data.map((e) => (
                    <Product data={e} key={e.id}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
