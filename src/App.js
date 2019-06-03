import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();
    // set the default states/ create boxes to store data into.
    this.state = {
      // pokemon name
      pokemon: [],
      // pokemon sprites
      sprite: [],
      // trainer user inputs
      trainerRecord: '',
      trainerName: '',
      // is...header or main hidden?
      isHeaderHidden: false,
      isMainHidden: true,
      // pokemon default level + randomizer
      randomLevel: 1,
    };
  }

  // if there is a change in input... tie this function to an on change event.
  handleChange = event => {
    this.setState ({
      trainerRecord: event.currentTarget.value,
    });
  };

  // on click/ submit... log the user's input from the handleChange event and update the state into trainerName so it can be called in the Main page.
  handleSubmit = event => {
    event.preventDefault();
    this.setState ({
      trainerName: this.state.trainerRecord,
      isHeaderHidden: true,
      isMainHidden: false,
    });
  };

  // call to the pokeAPI (axios will be used.)
  componentDidMount() {
    // variable randomNumber is created to generate a number from 0-150 (0 is bulbasaur & mew is 150 because of index numbering... which will be concat into const. modifiedUrl
    const randomNumber = Math.floor(Math.random() * 150);

    // variable level for generating a random level from 0-55 to be called in the Main page.
    const level = Math.floor(Math.random() * 55);

    // variable modifiedUrl is created so the randomNumber can be concat'd with the original URL... this is to pull a random pokemon along with all the info needed in one call.
    const modifiedUrl = `https://pokeapi.co/api/v2/pokemon/` + randomNumber;

    // perform "ajax" request after the component has finished rendering and is mounted.
    axios({
      url: modifiedUrl,
      method: "GET",
      dataResponse: "JSON"
      // pokeAPI does not have a key.
    }).then(response => {
      // go into the pokeAPI, grab the species name, and shove it in the pokemonName box.
      const pokemonName = response.data.species.name;
      // got into the pokeAPI, grab the sprites (front), and shove it in the pokemonSprite box.
      const pokemonSprite = response.data.sprites.front_default;

      // update the states here after getting your data.
      this.setState({
        pokemon: pokemonName,
        sprite: pokemonSprite,
        randomLevel: level,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {/* IF the state isHidden is true... HIDE the HEADER after the handleClick event. */}
        {this.state.isHeaderHidden ? null : 
          (<Header 
            onChange={this.handleChange} 
            onSubmit={this.handleSubmit} />
          )}

        {/* IF the state isHidden is false... UNHIDE the MAIN after the handleClick event */}
        {this.state.isMainHidden ? null :
          (<Main
          pokeName={this.state.pokemon}
          sprite={this.state.sprite}
          trainerName={this.state.trainerName}
          onChange={this.handleSelect}
          randomLevel={this.state.randomLevel}
          />)
        }
        {/* no changes to the footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
