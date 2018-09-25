import React from 'react';
import Location from "./Location.js"
import Menu from "./Menu.js"

const locationsArray=[
  {
    locationId: "1",
    locationName: 'Bouncy Buns!',
    locationAddress: 'Bakers Row, EC4N 6AE, London',
    locationImage: "https://media.giphy.com/media/138btjfXAn1xyo/giphy.gif"
  },

  {
    locationId: "2",
    locationName: 'Squishy Buns!',
    locationAddress: 'Vassall Rd ,Oval, SW9 6NJ',
    locationImage:'https://media.giphy.com/media/3o85xG8FB4iCtU33Mc/giphy.gif'
  },

  {
    locationId: "3",
    locationName: 'Buns Galore!',
    locationAddress: 'Forster Rd, Brixton, SW2 4UX',
    locationImage: "https://media.giphy.com/media/3ohjUObkKl8CyTFYf6/giphy.gif"
  }
];

const menuArray=[
  {
    menuId: '1',
    menuName: 'Cheeseburger',
    menuPrice: "£3"
  },

  {
    menuId: '2',
    menuName: 'Sloppyburger',
    menuPrice: "£5"
  },

  {
    menuId: '3',
    menuName: 'Megaburger',
    menuPrice: "£7"
  }
];

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Welcome to the BEST BURGERS in town!</h1>
        <div className="restaurants__container">
              {locationsArray.map(item =>
                <Location
                  key={item.locationId}
                  locationName={item.locationName}
                  locationAddress={item.locationAddress}
                  locationImage={item.locationImage} />)}
        </div>
        <div className="menu__container">
            {menuArray.map(item =>
              <Menu
                key={item.menuId}
                menuName={item.menuName}
                menuPrice={item.menuPrice} />)}
        </div>
      </div>
    )
  }
}

export default App;
