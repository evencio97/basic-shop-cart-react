import React, { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus, faTrashAlt, faShoppingCart, faTimesCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
//Components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import Alerts from './components/alerts/Alerts';

//FontAwesome library
library.add(fab, faCartPlus, faTrashAlt, faShoppingCart, faTimesCircle, faCheck);
window.sessionStorage.setItem("numAlerts", 0);

function App() {
    // Products list
    const [products, setProducts] = useState([
        { id: 1, name: 'shirt', price: 50.9, currency:"$" },
        { id: 2, name: 'shirt', price: 56.9, currency:"$" },
        { id: 3, name: 'shirt', price: 40, currency:"$" },
        { id: 4, name: 'shirt', price: 84.2, currency:"$" },
        { id: 5, name: 'shirt', price: 36.7, currency:"$" },
    ]);
    // Products in cart
    const [cartProducts, setCartProducts] = useState([]);
    // Alerts
    const [alerts, setAlerts] = useState([]);
    const addAlert = newAlert => {
        let numAlerts = parseInt(window.sessionStorage.getItem("numAlerts"))+1;
        window.sessionStorage.setItem("numAlerts", numAlerts);
        newAlert.id = numAlerts;
        setAlerts([...alerts, newAlert]);
    };
    
    const year = new Date().getFullYear();

    return (
        <Fragment>
            <Header img="/logo.png" name="EHI Webs Solutions" link="https://ehiwebs.com.ve" cartItems={cartProducts.length} />
            <div id="content">
                <Products 
                    titles={['ID', 'Name', 'Price', 'Action']} products={products}
                    cartProducts={cartProducts} setCartProducts={setCartProducts}
                    addAlert={addAlert} />
            </div>
            <Alerts alerts={alerts} setAlerts={setAlerts} />
            <Footer year={year} />
        </Fragment>
    );
}

export default App;
