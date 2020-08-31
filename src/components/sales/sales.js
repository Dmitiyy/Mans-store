import React from 'react';
import './sales.sass';
import './media.sass';

const data = [
    {title: 'Jeans', code: '#45DHG', id: '1d'},
    {title: 'Sneakers', code: '#31ATQ', id: '2d'},
    {title: 'T-shirts', code: '#097JY', id: '3d'},
    {title: 'Coats', code: '#89ERT', id: '4d'}
]

const Sales = () => {
    return (
        <div className="sales" id="sales">
            {
                data.map(item => {
                    const {title, code, id} = item;
                    return (
                        <div key={id} className="sales_block">
                            <h2>{title}</h2>
                            <p className="sales_block_p">{code}</p>
                            <div className="sales_trans">
                                <p className="sales_trans_p">Enter the promo code and get a discount</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sales;