import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ city: event.target.value })
  }
   
  render() {
    return (
      <form className='input-group'>
        <input
          placeholder='Enter City' 
          className='form-control'
          value={this.state.city}
          onChange={this.handleChange} 
          />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}