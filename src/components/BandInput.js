// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name:''  });
  }
  
  render() {
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Add a Band <input 
                        type="text" 
                        name="name"
                        onChange={this.handleChange} 
                        value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
