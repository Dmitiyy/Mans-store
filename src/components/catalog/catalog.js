import React from 'react';
import './catalog.sass';
import data from './data';
import {connect} from 'react-redux';
import {postToCart, handleActive} from '../../actions/';
import './media.sass';

const Catalog = ({postToCart, handleActive}) => {
    return (
        <div className="catalog" id="catalog">
            <div className="catalog_wrap">
                {
                    data.map(item => {
                        const {name, url, id, width, marginBottom, active, added} = item;
                        return (
                            <div className={'card'} style={{marginBottom}} key={id}>
                                <div className="card_img">
                                    <img style={{width}} src={url} alt=""/>
                                </div>
                                <div className="card_cont">
                                    <h2>{name}</h2>
                                    <button className={added ? `${active || 'card_btn'}` : 'card_btn'} onClick={() => {
                                        postToCart(item); 
                                        handleActive(item);
                                    }}>{added ? 'added' : 'add to cart'}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arrObj: state.arr,
        select: state.select
    }
}

const mapDispatchToProps = {
    postToCart,
    handleActive
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);