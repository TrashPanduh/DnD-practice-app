import React, { Component } from 'react';

class CharacterBackground extends Component {
    constructor(props) {
        super(props)
    
    
    this.state = {
        editing: false,
        Background : [
          {
            title: "Name",
            value:"Jack of the Woods",
          },
          {
            title:"Race",
            value:"Wood Elf",
          },
          {
            title:"background",
            value:"Hermit"
          }
        ]
    }
}

render() {
    return (
      <div className="App">
        <p>
          {
            this.state.CharacterBackground
          .map(background => {<background title={background.title} name={background.value} />})
          }
        </p>
      </div>
    );
  }
}
export default CharacterBackground;
