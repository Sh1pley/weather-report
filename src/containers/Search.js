import React, { Component } from 'react'
import config from '../../config'
// API key lives in config.API_KEY

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ city: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();

  }
  
  render() {
    return (
      <form 
      className='input-group'
      onSubmit={this.handleSubmit}>
        <input
          placeholder='Enter a City to get current weather' 
          className='form-control'
          value={this.state.city}
          onChange={this.handleChange} 
          />
        <span className='input-group-btn'>
          <button type='submit' className='btn'>Submit</button>
        </span>
      </form>
    )
  }
}