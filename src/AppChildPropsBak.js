import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Product extends Component{
    render(){
        return (
            <div className="product">
                <h3>{this.props.product.name}</h3>
                <p>{this.props.product.price}</p>
                <h4>{this.props.test.message}</h4>
                <input type="number" name="quantity0" min="0" max="10" />
                <button>Add to Cart</button>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="jumbo">React Store!</h1>
                <Product product={{name:'Coffee Mug',price: '$8.99'}} test={{message: 'This worked!!! :)'}}/>
                <div className="product">
                    <h3>Name: Mouse Pad</h3>
                    <p>Price: $15.49</p>
                    <input type="number" name="quantity1" min="0" max="10" />
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <h3>Name: Monitor Stand</h3>
                    <p>Price: $24.99</p>
                    <input type="number" name="quantity2" min="0" max="10" />
                    <button>Add to Cart</button>
                </div>
            </div>
        );
    }
}

export default App;
