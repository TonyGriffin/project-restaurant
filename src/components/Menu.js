import React from 'react';

class Menu extends React.Component {
  render(){
    return (
      <div className="name__price">
          <h2 className="menuName"> {this.props.menuName}</h2>
          <p className="menuPrice"> {this.props.menuPrice}</p>
      </div>
    )
  }
}

export default Menu;
