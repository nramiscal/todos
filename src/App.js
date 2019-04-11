import React, { Component } from 'react';
import './App.css';

// Form input placeholder "What needs to be done?"
// All Active Completed
// Checkmark Radio button
// "X" Delete
// x items left (number of unchecked)

class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.list.map((item, index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </ul>
        )
    }
}

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        }
    }

    addItem = (e) => {
        e.preventDefault();
        this.props.addToList(this.state.item);
        this.setState({item: ""})
    }

    changeItem = (e) => {
        this.setState({item: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.addItem}>
                <p>
                <input
                className="item"
                placeholder="What needs to be done?"
                onChange={this.changeItem}
                value={this.state.item}/></p>
                <input
                className="submit"
                type="submit"/>
            </form>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    addItemToList = (item)=>{
        let l = [...this.state.list];
        l.push(item);
        this.setState({list: l});
    }

    render() {
        return (
            <div>
                <h1>todos</h1>
                <Form addToList={this.addItemToList}/>
                <TodoList list={this.state.list}/>
            </div>
        )
    }
}

export default App;
