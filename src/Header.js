import React, { Component } from 'react';

class Header extends Component {
  // what to render?
  render () {
    // return
    return (
      <header className="pokeHero" id="pokeHero">
        <div className="wrapper">
          <div className="pokeTitle">
            <h1>Pokemon</h1>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;