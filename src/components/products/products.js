import React, {Component} from 'react';
import productData from "../../data/products.json";
import Actions from "../actions/actions"
import styles from "./products.css";

var images = () => {};
if (require.context) {
    images = require.context('../../assets/images', true);
}

const imagePath = (name) => images(name, true);


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // products: []
        };
    }

    render() {
        return (
            <ul className="row mt-5">{
                productData.map((productItem) => {
                    return <li className="list-unstyled col-xs-12 col-sm-4 col-md-3" key={productItem.id}
                               id={productItem.id}>
                        <div className="text-center">
                            <img className="product_img rounded" src={`${imagePath(`./${productItem.image}`)}`}
                                 alt={productItem.name}/>
                        </div>

                        <h4>{productItem.name} {productItem.weight}</h4>
                        <p>{productItem.price}</p>
                        <Actions
                            productId={productItem.id}
                            addToCart={this.props.addToCart}
                       />
                       <hr />
                        <small>{productItem.description}</small>
                    </li>
                })

            }
            </ul>
        )
    }
}

export default ProductList;