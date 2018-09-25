import React from 'react';
import Location from "./Location.js"
import Menu from "./Menu.js"

class App extends React.Component {
  render(){
    return (
      <div>
        <Location locationName="Bakers Buns"
                  locationAddress="Bakers Row, EC4N 6AE, London"/>

        <Menu menuId="1"
              menuName="Cheeseburger"
              menuPrice= "£3"/>
      </div>
    )
  }
}

export default App;
