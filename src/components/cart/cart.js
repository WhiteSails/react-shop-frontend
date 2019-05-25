import React, {Component} from 'react';
import productData from "../../data/products.json";
import { FaTrash, FaTimes } from 'react-icons/fa';
import styles from "./cart.css";
export const getProductPrice = (a , b) => (a * b);

const imagePath = (name) => {
    return "/images/"+name;
};

class Cart extends Component {

    render() {
        let currentContent = this.props.cartContent;
        console.log(currentContent);
        var total = 0;

        return (
            <div className="container product_cart">
                <button className="btn float-right close_btn" onClick={this.props.closeCart}>
                    <FaTimes/>
                </button>
                <div className="table-responsive inner">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Product Quantity</th>
                            <th>Actions</th>
                            <th>Sum</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            productData.map((productItem) => {
                                let price = parseFloat(productItem.price);
                                let quantity = currentContent[productItem.id];

                                if (!isNaN(currentContent[productItem.id])) {
                                    total += getProductPrice(price, quantity);
                                    return <tr key={productItem.id}>
                                        <td><img className="product_image" src={`${imagePath(`./${productItem.image}`)}`}
                                             alt={productItem.name}/>
                                        </td>
                                        <td>{productItem.name}</td>
                                        <td>{productItem.price}</td>
                                        <td>

                                            <button className="btn btn-light" onClick={() => this.props.decrement(productItem.id)}>-
                                            </button>
                                            <input type="text"
                                                   value={currentContent[productItem.id]}
                                                   readOnly
                                                   />
                                            <button className="btn btn-light" onClick={() => this.props.increment(productItem.id)}>+
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger"
                                            onClick={() => { this.props.remove(productItem.id)} }>
                                                <FaTrash />
                                            </button>
                                        </td>
                                        <td>{getProductPrice(price, quantity).toFixed(2)}
                                        </td>

                                    </tr>

                                } else {
                                    return null;
                                }
                            })
                        }
                        </tbody>
                    </table>
                    <table>
                    <tbody>

                        <tr>
                            <td>
                                <p>Sum to pay {total.toFixed(2)}</p>

                                <button className='btn btn-outline-success' onClick={() => {
                                    if (window.confirm("Are you sure?")) alert('ok')
                                }}>CheckOut
                                </button>
                            </td>

                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}


export default Cart;

