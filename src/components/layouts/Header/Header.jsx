import React from 'react';
import { Cart, Member } from '@/assets/icons/index';
import { useProductStore } from '@/stores/useProductStore';
import logo from '@/assets/images/logo.png';
import { Link } from 'react-router-dom';
import './index.scss'

const Header = (props) => {
    const { logout } = props;
    const cart = useProductStore((state) => state.cart);

    return (
        <header className='header'>
            <div className='headerLeft'>
                <img src={logo} className='mr-10' />
                <div className='headerLinks'>
                    <Link className='headerLink' to=''>Home</Link>
                    <Link className='headerLink' to=''>Product</Link>
                    <Link className='headerLink' to=''>About</Link>
                    <Link className='headerLink' to=''>Contact</Link>
                </div>
            </div>
            <div className='headerRight'>
                <Member className='cursor-pointer' />
                <div className='cartIconSet'>
                    <Cart className='cartIcon cursor-pointer' />
                    {cart.length ? (
                        <div className='cartBadge'>
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
