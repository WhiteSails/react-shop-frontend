import React from 'react';
import ProductList from '../products/ProductsList';
import Footer from '../footer/Footer';
import Cart from '../cart/Cart';
import Chat from '../chat/Chat';
import './App.scss';
import { FaShoppingBasket } from 'react-icons/fa';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            displayCart: false,
            displayChat: false,
            productsInCart: [],
            productId: ''
        };

        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }


    toggleCart = () => {
        this.setState({
            displayCart: !this.state.displayCart
        })
    };

    toggleChat = () => {
        this.setState({
            displayChat: !this.state.displayChat
        })
    };

    addToCart = (productId, count) => {
        let currentProductsInCart = this.state.productsInCart;
        if (isNaN(currentProductsInCart[productId])) {
            currentProductsInCart[productId] = count;
        } else {
            currentProductsInCart[productId] += count;
        }
        this.setState({
            productsInCart: [...currentProductsInCart]
        });
    };

    removeItemFromCart(productId) {
        let currentProductsInCart = this.state.productsInCart;
        currentProductsInCart[productId] = undefined;
        this.setState({
            productsInCart: currentProductsInCart
        })

    };

    incrementProductCount = (productId) => {
        let currentProductsInCart = this.state.productsInCart;
        currentProductsInCart[productId] +=1;
        this.setState({
            productsInCart: currentProductsInCart
        });
    };

    decrementProductCount = (productId) => {
        let currentProductsInCart = this.state.productsInCart;
        if(currentProductsInCart[productId] < 1 ) {
            return
        }
        currentProductsInCart[productId] -=1;
        this.setState({
            productsInCart: currentProductsInCart
        });
    };

    render() {
        let cart = null;
        if (this.state.displayCart) {
            cart = (
                <div>
                    <Cart
                        closeCart={this.toggleCart}
                        cartContent={this.state.productsInCart}
                        remove={this.removeItemFromCart}
                        increment={this.incrementProductCount}
                        decrement={this.decrementProductCount}
                    />
                </div>
            )
        }

        let chat = null;
        if (this.state.displayChat) {
            chat = (
                <div>
                    <Chat
                        closeChat={this.toggleChat}
                    />
                </div>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button className="btn float-right toogle_cart" onClick={this.toggleCart}>
                            <FaShoppingBasket />
                        </button>
                    </div>
                </div>
                {cart}

                <button className="btn toogle_chat" onClick={this.toggleChat}>Ask your question here!</button>
                {chat}

                <ProductList
                    addToCart={this.addToCart}
                />
                <Footer/>
            </div>
        )
    }
}

export default App;
