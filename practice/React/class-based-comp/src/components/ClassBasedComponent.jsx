import React, { Component } from "react";

export class ClassBasedComponent extends Component {
    state = {
        count: 0,
        displayString: "Hello World",
    };

    myFunction = () => {
        let { count } = this.state;
        this.setState(
            {
                count: count + 1,
            }
        );
    };

    createParagraph = (paraString) => {
        console.log("Renderinhg a paragraph");
        return <p>{paraString}</p>;
    };

    componentDidMount() {
        console.log("Component mounted");
    }

    componentDidUpdate() {
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component unmounted");
    }

    componentDidCatch() {
        console.log("Component caught");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should component update");
        return true;
    }

    render() {
        return (
            <div>
                <h1>{this.state.displayString}</h1>
                <p>
                    <b>Current count:</b> {this.state.count}
                </p>
                {this.createParagraph(this.state.displayString)}
                <button onClick={this.myFunction}>Increment</button>
            </div>
        );
    }
}

export default ClassBasedComponent;
