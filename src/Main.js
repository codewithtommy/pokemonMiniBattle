import React, { Component } from 'react';
import gameBoyLogoTwo from './assets/gameBoyLogoTwo.png'

class Main extends Component {
  constructor () {
    super ();
    this.state = {
      optionValue: '',
      isMessageOneHidden: true,
      isMessageTwoHidden: true,
    };
  }

  // if there is a change in selecting a drop down option... update the states and make sure only .messageOne shows up. 
  handleSelect = event => {
    this.setState ({
      optionValue: event.currentTarget.value,
      isMessageOneHidden: false,
      isMessageTwoHidden: true,
    });
  };
  
  // upon clicking on the arrow inside the message... update the states, clear .messageOne and display .messageTwo
  handleClearOne = event => {
    event.preventDefault();
    this.setState ({
      isMessageOneHidden: true,
      isMessageTwoHidden: false,
    })
  }

  // upon clicking on the arrow... update the states again, clear .messageTwo
  handleClearTwo = event => {
    event.preventDefault();
    this.setState ({
      isMessageTwoHidden: true,
    })
  }

  // function for reloading page which will be called on the "Run Away" button.
  refreshPage() {
    window.location.reload();
  }

  render() {
    return (
      <main className="pokeBattle">
        <div className="wrapper battle">
          {/* Div: Containing all sprites + titles */}
          <div className="pokeAllContainer">
            <div className="gameboyExterior">
              <div className="gameboyInterior">
                <div className="gameboyScreen">
                  <div className="pokeBackground">
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
                        <h3>{this.props.trainerName}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="messageContainer">
                    {this.state.isMessageOneHidden ? null : (
                      <div className="messageBorder">
                        <div className="message one">
                          <p>
                            Trainer: "{this.props.trainerName}" chucked a "
                            {this.state.optionValue}".
                          </p>
                          <div className="buttonDisplay">
                            <button onClick={this.handleClearOne}>
                              <i className="fas fa-caret-down" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {this.state.isMessageTwoHidden ? null : (
                      <div className="messageBorder">
                        <div className="message two">
                          <p>
                            <span className="uppercase">
                              {this.props.pokeName}
                            </span>{" "}
                            flinched a bit from that attack.
                          </p>
                          <div className="buttonDisplay">
                            <button onClick={this.handleClearTwo}>
                              <i className="fas fa-caret-down" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Div: Containing all user selections */}
                    <div className="selectionContainer">
                      <div className="select left">
                        <select name="action" onChange={this.handleSelect}>
                          <option
                            value=""
                            selected
                            disabled
                            hidden
                            tabIndex="0"
                          >
                            Fight/ Battle.
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
                          Pok<span className="lowercase">e</span>mon
                        </button>
                      </div>
                      <div className="select right">
                        {/* Button: Locked for MVP */}
                        <button
                          disabled
                          className="trainerButton"
                          title="Feature Locked"
                        >
                          Bag
                        </button>
                        {/* Note: this button is for clearing/ ending simulator. */}
                        <button
                          onClick={this.refreshPage}
                          className="trainerButton unlock"
                        >
                          Run Away.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gameLogo">
                  <img src={gameBoyLogoTwo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;