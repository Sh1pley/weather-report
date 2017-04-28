import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ city: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({city: ''})
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
          <button type='submit' className='btn btn-primary'>Submit</button>
        </span>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);