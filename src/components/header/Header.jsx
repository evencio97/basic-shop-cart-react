import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
    return(
        <header id="header">
            <img src={process.env.PUBLIC_URL + props.img} className="header-logo" alt="logo" />
            <a className="header-link" href={props.link} target="_blank" rel="noopener noreferrer">
                {props.name}
            </a>
            <button type="button" className="cart-buttom btn btn-light">
                <FontAwesomeIcon icon="shopping-cart" /> <span className="badge badge-danger">{props.cartItems}</span>
            </button>
        </header>
    );
}

export default Header;
