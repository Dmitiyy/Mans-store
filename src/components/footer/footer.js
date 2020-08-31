import React from 'react';
import './footer.sass';
import up from './up.png';
import {Link} from 'react-scroll';
import {Link as LinkReactRouter} from 'react-router-dom';
import './media.sass';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_wrap">
                <Link to="up" smooth={true}><p>Clothing store 2020</p></Link>
                <Link smooth={true} to="catalog"><p>Catalog</p></Link>
                <Link smooth={true} to="sales"><p>Sales</p></Link>
                <LinkReactRouter smooth={true} to="/cart"><p>Cart</p></LinkReactRouter>
                <Link smooth={true} to='up'><img src={up} alt=""/></Link>
            </div>
        </footer>
    )
}

export default Footer;