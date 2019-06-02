import React, { Component } from 'react';
import pokemonLogo from "./pokemonLogo.png";

class Header extends Component {
  // what to render?
  render() {
    // return
    return (
      <header className="pokeHero" id="pokeHero">
        <div className="wrapper hero">
          <div className="pokeTitle">
            <div className="pokeLogoContainer">
              <img src={pokemonLogo} alt="Pokemon Main Logo" />
            </div>
            <div className="pokeSubmit">
              <input
                type="text"
                className="name"
                maxLength="12"
                onChange={this.props.onChange}
                placeholder="Your Trainer Name!"
                required
              />
              <button
                className="nameSubmit"
                onClick={this.props.onClick}
                required
              >
                <i className="fas fa-caret-right"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;