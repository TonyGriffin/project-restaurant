import React from 'react';

class Location extends React.Component {
  render(){
    return (
      <div>
        <h1 className="locationName">{this.props.locationName} </h1>
        <p className="locationAddress">{this.props.locationAddress}</p>

      </div>
    )
  }
}

export default Location;
