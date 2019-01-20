import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0,
        count : 1
    }

    handleIncrease = () => {
        this.setState(
            //destructing assignment
            ({ number }) => ({
                number: number + 1
            })
        );
    }
    handleDecrease = () => {
        const number = this.state;
        this.setState({
            number: number - 1
        });
    }

    render() {
        return (
            <div>
            <h1>카운터</h1>
            <div>값: {this.state.number}</div>
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;
