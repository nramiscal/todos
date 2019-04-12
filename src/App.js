import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import TodoList from './TodoList';

// Form input placeholder "What needs to be done?" - DONE!
// Checkmark - DONE!
// "X" Delete - almost done...
// All - Active - Completed
// x items left (number of unchecked)


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

    removeItemFromList = (item)=>{
        // alert(`inside App removeItemFromList, removing ${item.item}`)
        let arr = [...this.state.list];

        for( var i = 0; i < arr.length; i++){
           if ( arr[i] === item.item) {
             arr.splice(i, 1);
             break;
           }
        }
        this.setState({list: arr});
    }

    render() {
        return (
            <div>
                <p className="header">todos</p>
                <TodoList list={this.state.list} liftItemToDelete={this.removeItemFromList}/>
                <Form addToList={this.addItemToList}/>
            </div>
        )
    }
}

export default App;
