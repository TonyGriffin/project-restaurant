import React from 'react';

class Location extends React.Component {
  render(){
    return (
      <div className="location-container">
        <h1 className="locationName">{this.props.locationName} </h1>
        <p className="locationAddress">{this.props.locationAddress}</p>
        <img className="locationGif" src={this.props.locationImage} />

      </div>
    )
  }
}

export default Location;
