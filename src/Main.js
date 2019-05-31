import React, { Component } from 'react';

class Main extends Component {

  refreshPage () {
    window.location.reload();
  }

  render () {
    return (
      <main className="pokeBattle">
        <div className="wrapper battle">
          {/* Div: Containing all sprites + titles */}
          <div className="pokeAllContainer">
            <div className="sprites top">
              <div className="pokeName">
                <h3>{this.props.name}</h3>
              </div>
              {/* Add in alt text pleasee */}
              <div className="pokeImg">
                <img src={this.props.sprite} alt={this.props.name} />
              </div>
            </div>
            <div className="sprites bottom">
              <div className="trainerImg">
                {/* Append Trainer Sprite? or Just directly append Trainer image.*/}
                <img src={this.props.spriteTwo} alt="" />
              </div>
              <div className="trainerName">
                <h3>Trainer: {this.props.trainerName}</h3>
              </div>
            </div>
            <div className="messageContainer">
              <div className="messageDisplay" />
            </div>
            {/* Div: Containing all user selections */}
            <div className="selectionContainer">
              <div className="select left">
                <select name="action" onChange={this.props.onChange}>
                  <option value="" selected disabled hidden>
                    Select Action Here.
                  </option>
                  <option value="ball">PokeBall?</option>
                  <option value="garbage">Garbage Bin</option>
                  <option value="burger">Dirty Cheeseburger</option>
                  <option value="roll">Spicy Salmon Roll</option>
                </select>
                {/* Button: Locked for MVP */}
                <button
                  disabled
                  className="trainerButton"
                  title="Feature Locked"
                >
                  Pokemon
                </button>
              </div>
              <div className="select right">
                {/* Button: Locked for MVP */}
                <button
                  disabled
                  className="trainerButton"
                  title="Feature Locked"
                >
                  Item
                </button>
                {/* Note: this button is for clearing/ ending simulator. */}
                  <button 
                  onClick={this.refreshPage}
                  className="trainerButton">Run</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;