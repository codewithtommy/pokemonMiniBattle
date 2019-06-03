import React, { Component } from 'react';
import gameBoyLogoTwo from './assets/gameBoyLogoTwo.png';
import fireRedSprite from "./assets/fireRedSprite.png"


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
          {/* Div: another inner wrapper to contain everything in */}
          <div className="pokeAllContainer">
            {/* Div: .gameboyExterior is the 1st layer of the gameboy design (limegreen) */}
            <div className="gameboyExterior animated fadeInLeft ">
              {/* Div: .gameboyInterior is the 2nd layer of the design (black screen) */}
              <div className="gameboyInterior">
                {/* Div: .gameboyScreen is the 3rd layer of the screen (contains all sprites + titles ) */}
                {/* + includes the background image that will be placed under .pokeBackground */}
                <div className="gameboyScreen animated flash fast">
                  <div className="pokeBackground">
                    <div className="sprites top">
                      <div className="pokeName">
                        <h3 className="animated fadeInLeft delay-3s">
                          {this.props.pokeName}
                        </h3>
                        <p className="animated fadeInLeft delay-3s">
                          Lv{this.props.randomLevel}
                        </p>
                        <div className="pokeBarWrapper animated fadeInLeft delay-3s">
                          <div className="pokeBar">
                            <div className="hpRightWrapper">
                              <div className="hpBar color fade-shine">
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pokeImg animated fadeInRight delay-3s">
                        <img
                          className="animated shake delay-5s slow"
                          src={this.props.sprite}
                          alt={this.props.pokeName}
                        />
                      </div>
                    </div>
                    <div className="sprites bottom">
                      <div className="trainerImg animated fadeInLeft delay-2s">
                        <img src={fireRedSprite} alt="Pokemon Trainer" />
                      </div>
                      <div className="trainerName">
                        <h3 className="animated fadeInRight delay-2s">
                          {this.props.trainerName}
                        </h3>
                        <div className="pokeBarWrapper animated fadeInRight delay-2s">
                          <div className="pokeBarTwo">
                            <div className="hpRightWrapper">
                              <div className="hpBar two color fade-shine">
                                <span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Div: this is where the messages will be displayed based on state.*/}
                  <div className="messageContainer animated fadeIn">
                    {this.state.isMessageOneHidden ? null : (
                      <div className="messageBorder animated fadeIn">
                        <div className="message one animated fadeIn">
                          <p>
                            Trainer: "{this.props.trainerName}" chucked a "
                            {this.state.optionValue}".
                          </p>
                          <div className="buttonDisplay">
                            <button onClick={this.handleClearOne}>
                              <i className="fas fa-caret-down animated infinite flash slower" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {this.state.isMessageTwoHidden ? null : (
                      <div className="messageBorder animated fadeIn">
                        <div className="message two animated fadeIn">
                          <p>
                            <span className="uppercase">
                              {this.props.pokeName}
                            </span> took that hit to the face.
                          </p>
                          <div className="buttonDisplay">
                            <button onClick={this.handleClearTwo}>
                              <i className="fas fa-caret-down animated infinite flash slower" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Div: containing all user selections */}
                    <div className="selectionContainer animated fadeIn">
                      <div className="select left">
                        <select
                          className="animated flash delay-4s" 
                          name="action" 
                          onChange={this.handleSelect}
                          value=''>
                          <option
                            disabled
                            hidden
                            tabIndex="0"
                            value=''>
                            Fight/ Battle.
                          </option>
                          <option value="Fake PokeBall">PokeBall?</option>
                          <option value="Garbage Bin">Garbage Bin</option>
                          <option value="Dirty Burger">Dirty Burger</option>
                          <option value="Spicy Salmon Roll">Salmon Roll</option>
                        </select>
                        {/* Button: Locked for MVP */}
                        <button
                          disabled
                          className="trainerButton"
                          title="Feature Locked">
                          Pok<span className="lowercase">e</span>mon
                        </button>
                      </div>
                      <div className="select right">
                        {/* Button: Locked for MVP */}
                        <button
                          disabled
                          className="trainerButton"
                          title="Feature Locked">
                          Bag
                        </button>
                        {/* Note: this button is for clearing/ ending simulator on click. */}
                        <button
                          onClick={this.refreshPage}
                          className="trainerButton unlock"
                          title="End Simulation">
                          Run Away.
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* gameboy color logo goes under here. */}
                <div className="gameLogo">
                  <img src={gameBoyLogoTwo} alt="Game Boy Color Logo" />
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