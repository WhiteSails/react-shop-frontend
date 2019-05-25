import React, {Component} from "react";

class Actions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement() {
        if (this.state.count <= 1) {
            return
        }
        this.setState({
            count: this.state.count - 1
        });
    };

    add() {
        this.props.addToCart(this.props.productId, this.state.count);
    }

    render() {
        return (
            <div className="float-right">
                <button className="btn" onClick={(e) => this.decrement(e)}>-</button>
                <input type="text" value={this.state.count} readOnly/>
                <button className="btn" onClick={(e) => this.increment(e)}>+</button>
                <button className="add_button ml-2 btn btn-outline-info" onClick={() => this.add()}>
                    Add
                </button>
            </div>
        )
    }
}

export default Actions;