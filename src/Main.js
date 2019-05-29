import React, { Component } from 'react';

class Main extends Component {
  render () {
    return (
      <main>
        <div className="wrapper battle">
          <div className="spritesContainer">
            <div className="pokeSprite">
              <img src="" alt=""/>
            </div>
            <div className="trainerSprite">
              {/* Append Trainer Sprite? or Just directly append Trainer image.*/}
            </div>
          </div>
          <div className="selectionContainer">
            <div className="select left">
              <select name="action">
                <option value="pokeBall">PokeBall?</option>
                <option value="garbage">Garbage Bin</option>
                <option value="badFood">Dirty Cheeseburger</option>
                <option value="goodFood">Spicy Salmon Roll</option>
              </select>
              <button>Item</button>
            </div>
            <div className="select right">
              <button>Pokemon</button>
              <button>Run</button>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Main;