// Update to React, { Component }...
import React, { Component } from 'react';
// import logo from './logo.svg';
// import pokeballLoader from './assets/pokeballLoader.png';
import './App.css';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

// Update function to class App extends Component.
class App extends Component {
  constructor() {
    super();
    // set the default state
    this.state = {
      // create boxes here,  where we can store the data there.
      pokemon: [],
      sprite: [],
      spriteTwo: [],
      trainerRecord: '',
      trainerName: '',
      isHidden: false,

      // add on a pre-loaded for user experience
      // isLoading: true,
    };
  }

  // if there is a change in input... tie this function to an on change event.
  handleChange = event => {
    this.setState ({
      trainerRecord: event.currentTarget.value,
    });
  };
  // on click submit... log the user's input text so we can call for it later in main.js
  handleClick = event => {
    event.preventDefault();
    this.setState ({
      trainerName: this.state.trainerRecord,
      isHidden: true,
    });
  };

  // this is where we can make a call to the API (axios will be used.)
  componentDidMount() {
    // variable randomNumber is created to generate a number from 0-150 (0 is bulbasaur & mew is 150 because of index numbering)
    const randomNumber = Math.floor(Math.random() * 150);
    // variable newURL is created so the randomNumber can be concat'd with the original URL... this is to pull a random pokemon along with all the info needed in one call.
    const newURL = `https://pokeapi.co/api/v2/pokemon/` + randomNumber;

    // perform "ajax" request after the component has finished rendering and is mounted.
    axios({
      url: newURL,
      method: "GET",
      dataResponse: "JSON"
      // pokeAPI does not have a key, it is not needed.
    }).then(response => {
      // go into the pokeapi, grab the species name, and shove it in the pokemonName box.
      const pokemonName = response.data.species.name;
      // got into the pokeapi, grab the sprites (front), and shove it in the pokemonSprite box.
      const pokemonSprite = response.data.sprites.front_default;
      // pokeapi test/ placeholder sprite
      const pokemonSpriteTest = response.data.sprites.back_default;

      // update the states after getting your data.
      this.setState({
        pokemon: pokemonName,
        sprite: pokemonSprite,
        // spriteTwo: is a tester sprite which will be the user's sprite
        spriteTwo: pokemonSpriteTest,
        // isLoading: false,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.isLoading ? (<img src={pokeballLoader} className="appLogo" alt="" />) : ()} */}
        {/* IF the state isHidden is true... HIDE the HEADER after the handleClick event. */}
        {this.state.isHidden ? null : 
        (<Header 
          onChange={this.handleChange} 
          onClick={this.handleClick} />
        )}

        {/* IF the state isHidden is false... UNHIDE the MAIN after the handleClick event */}
        {this.state.isHidden ?         
          (<Main
          pokeName={this.state.pokemon}
          sprite={this.state.sprite}
          spriteTwo={this.state.spriteTwo}
          trainerName={this.state.trainerName}
          onChange={this.handleSelect}
          />) : null
        }
        <Footer />
      </div>
    );
  }
}

export default App;
