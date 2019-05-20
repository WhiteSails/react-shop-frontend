import React from 'react';
import ProductList from '../products/products';
import Footer from '../footer/footer';
import Cart from '../cart/cart';
import Chat from '../chat/chat';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            displayCart: false,
            displayChat: false,
            productsInCart: [],
            productId: ''
        };
        this.addToCart = this.addToCart.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
        this.incrementProductCount = this.incrementProductCount.bind(this);
        this.decrementProductCount = this.decrementProductCount.bind(this);
    }


    displayCart = () => {
        this.setState({
            displayCart: !this.state.displayCart
        })
    };
    displayChat = () => {
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

    sendMessage = () => {
        let sendedMessages = this.state.messages;
        this.setState({
            messages: [...sendedMessages]
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
                        closeCart={this.displayCart}
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
                        addChatMessage={this.addChatMessage}/>
                </div>
            )
        }

        return (
            <div className="container-fluid">
                {/*<Nav toogleCart={this.displayCart()}/>*/}
                <button className="btn" onClick={this.displayCart}>View Cart</button>
                {cart}
                <button className="btn" onClick={this.displayChat}>View Chat</button>
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
