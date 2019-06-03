import React, { Component } from 'react';
import pokemonLogoOne from "./assets/pokemonLogoOne.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      trainerPlacehold: "Your Trainer Name!",
      // below: max/ min length for input
      maxLength: 12,
      minLength: 3,
    }
  }

  render() {
    return (
      <header className="pokeHero" id="pokeHero">
        <div className="wrapper hero">
          <div className="pokeTitle">
            <div className="pokeLogoContainer animated fadeIn">
              <img src={pokemonLogoOne} alt="Pokemon Main Logo" />
            </div>
            <div className="pokeSubmit animated bounce slower">
              <form
                tabIndex="0"  
                onSubmit={this.props.onSubmit}>
                <input className="name"
                  maxLength={this.state.maxLength}
                  minLength={this.state.minLength}
                  onChange={this.props.onChange}
                  placeholder={this.state.trainerPlacehold}
                  type="text"
                  required="required"/>
                <button
                  className="nameSubmit">
                  <i className="fas fa-caret-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;