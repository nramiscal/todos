import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            name: this.props.item.name
        }
    }

    toggle = (e)=>{
        // alert(`checkbox was clicked!`);
        if (this.state.checked){
            this.setState({checked: false})
        } else {
            this.setState({checked: true});
        }

    }

    delete = (e)=>{
        // alert(`delete was clicked!, removing ${this.state.name}`);
        this.props.liftItemToDelete({item: this.state.name});
    }

    render() {
        if (this.state.checked) {
            return (
                <li>
                <img
                onClick={this.toggle}
                alt=""
                src={require("./images/greencheckmark.png")}
                />
                <span
                className="text1"
                >{this.props.item.name}</span>
                <img
                className="x"
                onClick={this.delete}
                alt={this.props.item.name}
                src={require("./images/x.png")}
                />
                </li>

            )
        } else {
            return (
                <li>
                <img
                onClick={this.toggle}
                alt=""
                src={require("./images/uncheckedcircle.png")}
                />
                &nbsp;&nbsp;{this.props.item.name}
                <img
                className="x"
                onClick={this.delete}
                alt=""
                src={require("./images/x.png")}
                />
                </li>

            )
        }
    }
}

class TodoList extends Component {

    liftItemToDelete = (item)=>{
        // alert(`inside TodoList liftItemToDelete, removing ${item}`);
        this.props.liftItemToDelete(item);
    }

    render() {
        return (
            <ul>
                {
                    this.props.list.map((item, index)=>
                        <ListItem
                        key={index}
                        item={{name:item}}
                        liftItemToDelete={this.liftItemToDelete}/>
                    )
                }
            </ul>
        )
    }
}

export default TodoList
