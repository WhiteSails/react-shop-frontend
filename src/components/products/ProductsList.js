import React, {Component} from 'react';
import productData from "../../data/products.json";
import Actions from "../actions/Actions"
import './ProductList.scss'

const imagePath = (name) => {
    return "/images/" + name;
};


class ProductList extends Component {

    render() {
        return (
            <ul className="row mt-5 mb-5" id="product_list">{
                productData.map((productItem) => {
                    return <li className="list-unstyled col-xs-12 col-sm-6 col-md-4" key={productItem.id}
                               id={productItem.id}>
                        <div className="text-center">
                            <img className="product_img rounded my-3" src={`${imagePath(`./${productItem.image}`)}`}
                                 alt={productItem.name}/>
                        </div>

                        <h5>{productItem.name} {productItem.weight}</h5>
                        <p className="float-left my-2">{productItem.price}</p>
                        <Actions
                            productId={productItem.id}
                            addToCart={this.props.addToCart}
                        />
                        <div className="clearfix"></div>
                        <hr/>
                        <small>{productItem.description}</small>
                    </li>
                })

            }

            </ul>
        )
    }
}

export default ProductList;