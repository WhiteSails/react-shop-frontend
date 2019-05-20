import React, {Component} from "react";
import { FaPlus } from 'react-icons/fa';

class Actions extends Component {
   constructor(props) {
       super(props);
       this.state = {
           count: 1
       };
   }

    increment() {
       this.setState({
           count: this.state.count +1
       });
    };

   decrement() {
       if(this.state.count <= 1) {
           return
       }
       this.setState({
           count: this.state.count -1
       });
   };

   add() {
       this.props.addToCart(this.props.productId, this.state.count);
   }
   render() {

        return (
            <div>
                <button className="btn btn-light" onClick={(e) => this.decrement(e)}>-</button>
                <input type="text" value={this.state.count} readOnly/>
                <button className="btn btn-light" onClick={(e) => this.increment(e)}>+</button>
                <button className="ml-1 btn btn-outline-info" onClick={() => this.add()}>
                <FaPlus/>
                </button>
            </div>

        )
    }
}

export default Actions;