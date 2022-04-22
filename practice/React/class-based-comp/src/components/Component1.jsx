import React, { Component } from "react";

export class Component1 extends Component {
    state = {
        count: 0,
    };

    myFunction() {
        let { count } = this.state;
        this.setState({
            count: count + 1,
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <ButtonComponent onClick={this.myFunction} />
                <ButtonComponent onClick={this.myFunction.bind(this)} />
            </div>
        );
    }
}

export default Component;

const ButtonComponent = (props) => {
    return <button onClick={props.onClick}>Increment</button>;
};
