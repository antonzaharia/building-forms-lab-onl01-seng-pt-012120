// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: ""
    }
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({ name: ""})
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"></label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
