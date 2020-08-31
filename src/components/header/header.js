import React, {useEffect} from 'react';
import './header.sass';
import main_img from './img_head.jpg';
import AOS from 'aos';
import "aos/dist/aos.css";
import {Link} from 'react-scroll';
import './media.sass';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);
    return (
        <header className="header">
            <div data-aos="fade-right" className="header_cont">
                <h1 data-aos="fade-right">Brand men's clothing</h1>
                <h2 data-aos="fade-right">
                    Buy high-quality, cheap 
                    clothes for every taste
                </h2>
                <Link to="catalog" smooth={true}><button style={{transition: '0.3s'}} className="header_btn">Buy now</button></Link>
            </div>
            <img data-aos="fade-left" className="header_img" alt="" src={main_img}/>
        </header>
    )
}

export default Header;