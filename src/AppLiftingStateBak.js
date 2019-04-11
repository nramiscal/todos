import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class Item extends Component {
//     render() {
//         return (
//             <li>{this.props.item}</li>
//         )
//     }
// }

// (in App class render():)
// {
//     this.state.groceries.map((item,index)=>
//         <Item key={index} item={item}/>
//     )
// }

class GroceryList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.arr.map((item, index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        )
    }
}

class GroceryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
    }

    changeItem = (e)=>{
        this.setState({item: e.target.value});
    }

    addItem = (e)=>{
        e.preventDefault();
        // now what do we do??? ;)
        this.props.onAddItem(this.state.item)
        this.setState({item: ""})
    }

    render() {
        return (
            <form onSubmit={this.addItem}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.changeItem}
                />
                <input type="submit" />
            </form>
        )

    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            groceries: [
                "Carrots",
                "Cremini Mushrooms",
                "Beef Stock",
                "Pearl Onions"
            ],
            item: ""
        }
    }

    addItemToList = (item)=>{
        let list = [...this.state.groceries]
        list.push(item);
        this.setState({groceries: list});
    }

    render() {
        return (
            <div className="container">
                <h1>My Grocery List</h1>
                <GroceryList arr={this.state.groceries}/>
                <GroceryForm onAddItem={this.addItemToList}/>
            </div>
        );
    }
}

export default App;
