import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {
                "name": "",
                "price": 0
            }

        }
    }

    newProduct = (e)=>{
        e.preventDefault();
        alert(`name: ${this.state.product.name}, price: ${this.state.product.price}`)
    }

    changeName = (e)=>{
        let p = {...this.state.product};
        p.name = e.target.value;
        this.setState({product: p})
    }

    changePrice = (e)=>{
        let p = {...this.state.product};
        p.price = e.target.value;
        this.setState({product: p})
    }

    render() {
        return (
            <form onSubmit={this.newProduct}>
                <h1>Create a Product</h1>
                <p>Name</p>
                <p><input
                type="text"
                name="name"
                onChange={this.changeName}/>{this.state.product.name}</p>
                <p>Price</p>
                <p><input
                type="number"
                name="price"
                onChange={this.changePrice}/>{this.state.product.price}</p>
                <input type="submit"/>
            </form>
        );
    }
}

export default App;
