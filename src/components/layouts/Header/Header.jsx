import React from 'react';
import { Cart, Member } from '@/assets/icons/index';
import { useProductStore } from '@/stores/useProductStore';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { logout } = props;
    const cart = useProductStore((state) => state.cart);

    return (
        <header className='flex justify-between py-3 ml-5 items-center'>
            <div className='w-28 flex items-center'>
                <img src={logo} className='mr-10' />
                <div className='flex items-center mt-2'>
                    <Link className='mr-8' to=''>Home</Link>
                    <Link className='mr-8' to=''>Product</Link>
                    <Link className='mr-8' to=''>About</Link>
                    <Link className='mr-8' to=''>Contact</Link>
                </div>
            </div>
            <div className='flex mt-2'>
                <Member className='cursor-pointer' />
                <div className='relative'>
                    <Cart className='mx-3 cursor-pointer' />
                    {cart.length ? (
                        <div className='text-xs absolute top-[-5px] right-[5px] bg-red-200 w-4 h-4 rounded-full flex justify-center items-center'>
                            {cart.length}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
