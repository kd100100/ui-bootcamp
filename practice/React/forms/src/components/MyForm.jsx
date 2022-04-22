import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "", select: "" };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ value: event.target.value }, () => {
            console.log(this.state.value);
        });
    }

    handleSelectChange(event) {
        this.setState({ select: event.target.value }, () => {
            console.log(this.state.select);
        });
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Select Tag:
                    <select
                        value={this.state.select}
                        onChange={this.handleSelectChange}
                    >
                        <option value="">Select Tag</option>
                        <option value="1">Tag 1</option>
                        <option value="2">Tag 2</option>
                        <option value="3">Tag 3</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;
