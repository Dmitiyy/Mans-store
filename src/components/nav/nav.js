import React, {useState} from 'react';
import './nav.sass';
import {Link} from 'react-scroll';
import {Link as LinkReactRouter} from 'react-router-dom';
import './media.sass';

const Nav = () => {
    const [active, onActiveBurger] = useState(false);

    return (
        <>
            <nav className="nav" id="up">
                <div className="wrap_nav">
                    <div className="block_logo_nav">Clothing store</div>
                    <div className="block_catalog_nav">
                        <ul>
                            <Link smooth={true} to="catalog"><li>Catalog</li></Link>
                            <Link smooth={true} to="sales"><li>Sales</li></Link>
                            <LinkReactRouter to="/cart"><li>Cart</li></LinkReactRouter>
                        </ul>
                    </div>
                    <div className="block_phone_nav">+380(097)-678-45-44</div>
                    <div onClick={() => {
                        onActiveBurger(!active);
                    }} className="block_burger_nav">
                        <div className="item_burger_nav"/>
                        <div className="item_burger_nav"/>
                        <div className="item_burger_nav"/>
                    </div>
                </div>
            </nav>
            <div style={active ? {'display' : 'flex'} : {'display' : 'none'}} className="block_nav_mobile">
                <ul>    
                    <Link smooth={true} to="catalog"><li>Catalog</li></Link>
                    <Link smooth={true} to="sales"><li>Sales</li></Link>
                    <LinkReactRouter to="/cart"><li>Cart</li></LinkReactRouter>
                </ul>
            </div>
        </>
    )
}

export default Nav;