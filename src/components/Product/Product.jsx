import React from 'react';
import { useProductStore } from '@/stores/useProductStore';
import { Love } from '@/assets/icons';

const Product = (props) => {
    const { productData } = props
    const addToCart = useProductStore((state) => state.addToCart)
    const cart = useProductStore((state) => state.cart)

    const inCart = () => {
        let target = cart.find((item) => item.id === productData.id ? true : false)
        return target ? target.qty : 0
    }

    return (
        <div className="flex font-sans w-full border border-slate-200 rounded-lg p-5">
            <div className="flex-none w-48 relative">
                <img src={productData.image} alt="" className="absolute inset-0 w-full h-full object-contain" loading="lazy" />
            </div>
            <form className="flex flex-col justify-between p-6">
                <div className="flex flex-col">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {productData.title}
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        ${productData.price}
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        In stock
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Buy now
                        </button>
                        <button className="h-10 px-6 font-semibold relative rounded-md border border-slate-200 text-slate-900" type="button" onClick={() => addToCart(productData)}>
                            {inCart() ? <div className='text-xs absolute top-[-10px] right-[-8px] bg-red-200 w-5 h-5 rounded-full flex items-center justify-center'>{inCart()}</div> : ''}
                            Add to bag
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <Love />
                    </button>
                </div>
                <p className="text-sm text-slate-700">
                    Free shipping on all continental US orders.
                </p>
            </form>
        </div>

    );
};

export default Product;
