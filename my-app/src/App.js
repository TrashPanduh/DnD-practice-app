import React, { Component } from 'react';
import './App.css';
import CharacterData from './components/CharacterAttribute'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editing: false,
      attributes: [
        {
          title: "Strength",
          default: 12,
        },
        {
          title: "Dexterity",
          default: 18,
        },
        {
          title: "Constitution",
          default: 17,
        },
        {
          title: "Intelligence",
          default: 12,
        },
        {
          title: "Wisdom",
          default: 13,
        },
        {
          title: "Charisma",
          default: 15,
        },
      ]
    }
  }

  beginEdit() {
    this.setState({
      editing: true
    })
  }

  cancelEdit() {
    this.setState({
      editing: true
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.attributes
              .map(attribute => {
                return <CharacterData title={attribute.title} default={attribute.default} />
              })
          }
        </ul>
      </div>
    );
  }
}

export default App;
