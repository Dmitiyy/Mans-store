import React from 'react';
import './cart.sass';
import back from './back.png';
import {Link} from 'react-router-dom';
import del from './del.png';
import {connect} from 'react-redux';
import {deleteCard, sendProductsEmail, sendProductsPhone, incCount, clear, loading, requested} from '../../actions/';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';
import loadingImg from './loading.svg';
import './media.sass';

const Cart = ({arr, deleteCard, sendProductsPhone, phone, sendProductsEmail, email, incCount, clear, loading, load, requested}) => {
    const generateCards = () => {
        const generateArr = arr.map(item => {
            const {url, name, id, count} = item;
            return (
                <div key={id} className="cart_card">
                    <div className="cart_block_img">
                        <img src={url} alt=""/>
                    </div>
                    <div className="cart_block_obv_del">
                    <div className="cart_obv_del">
                            <img onClick={() => {
                                deleteCard(item)
                            }} src={del} alt="" className="cart_card_del"/>
                    </div>
                    <div className="cart_block_cont">
                        <h2>{name}</h2>
                        <div className="cart_wrap_count">
                            <h2>quantity</h2>
                            <div onClick={() => {
                                incCount(item);
                            }} className="cart_block_count">
                                <h3>{count}</h3>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
        });
        return generateArr;
    }

    const sendMail = (e) => {
        e.preventDefault();
        

        const prod = arr.map(item => {
            return ` ${item.name} - ${item.count}`;
        })

        const templateParams = {
            phone: phone,
            email: email,
            products: prod
        };

        if (phone === undefined || email === undefined) {
            alert('Your input is empty');
        } else {
            loading();
            
            emailjs.send('mail_store', 'tem_send_id', templateParams, 'user_FdSSkP6FkMjpjLsajouWD')
            .then(function() {
               alert('Thank you, we will contact you soon');
               requested();
            }, function(error) {
               console.log('FAILED...', error);
            });

            clear();
        }
    }
    const View = () => {
        return (
            <>
                {
                    generateCards()
                }
                <form className="cart_form" onSubmit={(e) => sendMail(e)}>
                    <InputMask value={phone} name="phone" mask="+38(099)-999-99-99" maskChar="_" onChange={(e) => {
                        sendProductsPhone(e.target.value);
                    }} className="cart_form_inp" placeholder="Enter the phone number"/>
                    <input value={email} name="email" onChange={(e) => {
                        sendProductsEmail(e.target.value);
                    }} className="cart_form_inp" placeholder="Enter your email"/>
                    <button className="cart_form_btn" type="submit">BUY</button>
                </form>
            </>
        )
    }

    const cond = arr.length === 0 ? <h1 className="h1_empty">Your cart is empty</h1> : load ? <img src={loadingImg} alt="" className="loading_img"/> : View();

    return (
        <>
            <Link to="/">
                <div className="cart_nav">
                    <img src={back} alt=""/>
                    <h2>MAIN PAGE</h2>
                </div>
            </Link>
            <div className="cart_wrap">
                <div className="cart_inner">
                    {cond}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        arr:  state.arr,
        phone: state.phone,
        email: state.email,
        load: state.load
    }
}

const mapDispatchToProps = {
    deleteCard,
    sendProductsPhone,
    sendProductsEmail,
    incCount,
    clear, 
    loading, 
    requested
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);