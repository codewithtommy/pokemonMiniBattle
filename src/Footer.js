import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <footer className="pokeCredits">
        <div className="wrapper">
          <p>
            <a href="https://twitter.com/codewithtommy">Tommy</a> 2019. Poke Powered by: RESTFUL <a href="https://pokeapi.co/">PokeAPI.co</a></p>
        </div>
      </footer>
    )
  }
}

export default Footer;