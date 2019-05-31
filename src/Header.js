import React, { Component } from 'react';
import pokemonLogo from "./pokemonLogo.png";

class Header extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isHidden: false,
  //   };
  // }

  // what to render?
  render() {
    // return
    return (
      <header className="pokeHero" id="pokeHero">
        <div className="wrapper hero">
          <div className="pokeTitle">
            <div className="pokeLogoContainer">
              <img 
              src={pokemonLogo} 
              alt="Pokemon Main Logo" />
            </div>
            <div className="pokeSubmit">
              <input
                type="text"
                className="name"
                placeholder="Your Trainer Name!"
                onChange={this.props.onChange}
                required
              />
              <button 
              className="nameSubmit" 
              onClick={this.props.onClick}
              required>
                Go!
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;