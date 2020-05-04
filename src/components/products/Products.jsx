import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Products({ titles, products, cartProducts, setCartProducts, addAlert }) {
    const addProduct = id => {
        if (cartProducts.length && cartProducts.find(product => product.id === id)){
            addAlert({ type: 'Error', message: 'The product is already in your cart.' });
            return;
        }
        let product = products.find(product => product.id === id);
        setCartProducts([...cartProducts, product]);
        addAlert({ class: 'alert-success',type: 'Success', message: 'The product have been added to your cart.' });
    };

    const removeProduct = id => {
        if (!cartProducts.length){
            addAlert({ type: 'Error', message: 'The cart is empty.' });
            return;
        }
        if (!cartProducts.find(product => product.id === id)){
            addAlert({ type: 'Error', message: "The product isn't in your cart." });
            return;
        }
        setCartProducts(cartProducts.filter(product => product.id !== id));
        addAlert({ class: 'alert-success',type: 'Success', message: 'The product have been removed from your cart.' });
    };

    const productsList = products.map(product => (
        <tr key={'pro-' + product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.currency + product.price}</td>
            <td>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary" onClick={() => addProduct(product.id)}>
                        <FontAwesomeIcon icon="cart-plus" />
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => removeProduct(product.id)}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </button>
                </div>
            </td>
        </tr>
    ));

    return (
        <div className="container section">
            <div className="row">
                <div className="col-12">
                    <h2 className="section-title">Products List</h2>
                </div>
                <div className="col-12 table-responsive text-nowrap">
                    <table className="table table-hover table-striped text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">{titles[0]}</th>
                                <th scope="col">{titles[1]}</th>
                                <th scope="col">{titles[2]}</th>
                                <th scope="col">{titles[3]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsList}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Products;