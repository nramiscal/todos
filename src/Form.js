import React, { Component } from 'react';

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

export default Form
