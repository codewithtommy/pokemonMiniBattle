import React, { Component } from 'react';

class Main extends Component {
  constructor () {
    super ();
    this.state = {
      optionValue: '',
      isMessageOneHidden: true,
      isMessageTwoHidden: true,
    };
  }

  // on select option... log the user's option so we can call for it later in main.js
  handleSelect = event => {
    this.setState ({
      optionValue: event.currentTarget.value,
      isMessageOneHidden: false,
      isMessageTwoHidden: true,
    });
  };
  
  handleClearOne = event => {
    event.preventDefault();
    this.setState ({
      isMessageOneHidden: true,
      isMessageTwoHidden: false,
    })
  }

  handleClearTwo = event => {
    event.preventDefault();
    this.setState ({
      isMessageTwoHidden: true,
    })
  }

  // handleClear = event => {
  //   event.preventDefault();
  //   this.setState({
  //     isMessageOneHidden: false,
  //     isMessageTwoHidden: true,
  //   });
  // }

  // function for reloading page which will be called on the "run" button.
  refreshPage() {
    window.location.reload();
  }

  // const randomResponse = Math.floor(Math.random() * 150);

  render() {
    return (
      <main className="pokeBattle">
        <div className="wrapper battle">
          {/* Div: Containing all sprites + titles */}
          <div className="pokeAllContainer">
            <div className="sprites top">
              <div className="pokeName">
                <h3>{this.props.pokeName}</h3>
              </div>
              {/* Add in alt text pleasee */}
              <div className="pokeImg">
                <img
                  src={this.props.sprite}
                  alt={this.props.pokeName}
                />
              </div>
            </div>
            <div className="sprites bottom">
              <div className="trainerImg">
                <img src={this.props.spriteTwo} alt="" />
              </div>
              <div className="trainerName">
                <h3>Trainer: {this.props.trainerName}</h3>
              </div>
            </div>
            <div className="messageContainer">
              {this.state.isMessageOneHidden ? null : (
                <div className="message one">
                  <p>
                    Trainer: "{this.props.trainerName}" chucked a "{this.state.optionValue}".
                  </p>
                  <div className="buttonDisplay">
                    <button onClick={this.handleClearOne}>
                      <i className="fas fa-caret-down" />
                    </button>
                  </div>
                </div>
              )}
              {this.state.isMessageTwoHidden ? null : (
                <div className="message two">
                  <p>
                    {this.props.pokeName} flinched a bit from that attack.
                  </p>
                  <div className="buttonDisplay">
                    <button onClick={this.handleClearTwo}>
                      <i className="fas fa-caret-down" />
                    </button>
                  </div>
                </div>)}
            </div>
            {/* Div: Containing all user selections */}
            <div className="selectionContainer">
              <div className="select left">
                <select name="action" onChange={this.handleSelect}>
                  <option value="" selected disabled hidden>
                    Select Action Here.
                  </option>
                  <option value="Fake PokeBall">PokeBall?</option>
                  <option value="Garbage Bin">Garbage Bin</option>
                  <option value="Dirty Cheeseburger">
                    Dirty Cheeseburger
                  </option>
                  <option value="Spicy Salmon Roll">
                    Spicy Salmon Roll
                  </option>
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
                  className="trainerButton"
                >
                  Run Away
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;