import React, { Component } from 'react'
import { connect } from 'react-redux'

class CityList extends Component {
  parseCity(cityData) {
    let iconCode = cityData.weather[0].icon
    let iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`
    let fahrenheit = ((cityData.main.temp - 273.15) * 1.8) + 32
    return (
      <tr key={cityData.id}>
        <td><h3>{cityData.name}</h3></td>
        <td><h3>{Math.floor(fahrenheit)}</h3></td>
        <td><img src={iconUrl} alt='img missing'></img><br/>{cityData.weather[0].description}</td>
      </tr>
    )
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Current Temp</th>
            <th>Outside</th>          
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.parseCity)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
}

export default connect(mapStateToProps)(CityList);