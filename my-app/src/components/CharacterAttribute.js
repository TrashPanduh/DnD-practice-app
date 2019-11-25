import React, { Component } from 'react';

class CharacterAttribute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            temporaryValue: null,
            value: null
        }
        console.log(props);
    }

    beginEdit() {
        this.setState({
            editing: true
        })
    }

    cancelEdit() {
        this.setState({
            editing: false
        })
    }

    saveValue() {
        this.setState({
            value: this.state.temporaryValue,
            editing: false
        })
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.state.value ? this.state.value : this.props.default}</p>
                {
                    this.state.editing ?
                        (<div>
                            <input onChange={(event) => this.setState({ temporaryValue: event.target.value })}></input>
                            <button onClick={() => this.saveValue()}>Save</button>
                            <button onClick={() => this.cancelEdit()}>Cancel</button>
                        </div>) :
                        <button onClick={() => this.beginEdit()}>Edit</button>
                }

            </div>
        );
    }
}

export default CharacterAttribute;
