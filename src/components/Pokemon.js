import React from 'react'

class Pokemon extends React.Component {
  constructor(){
    super()

    this.state = {
      isEditing: false,
      userInput: ''
    }
  }

  toggleEdit(){}

  handleChange(event){}

  render() {
    return (
      <div>Pokemon.js</div>
    )
  }
}

export default Pokemon