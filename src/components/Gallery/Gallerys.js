import React, { Component, Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Button } from 'react-bootstrap'
import Media from 'react-bootstrap/Media'

export default class Gallery extends Component {


  render() {

    return (

      
      <Fragment>

        <div style={styles.block}>

          <Fade top>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Tamagotchi_0124_ubt.jpeg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">

                  <h3 className="text">Tomagotchi</h3>
                  <p className="text">TAMAGOTCHI is a GAME!

                  The Tamagotchi (たまごっち) is a handheld digital pet, created in Japan by Akihiro Yokoi of WiZ and Aki Maita of Bandai, the game that became one of the biggest toy fads of the 1990s and early 2000s. This app allows the user to play a narrative based on the old amazing game once again!</p>
                  <h3>Technologies used.</h3>
                  <p>Phaser 3, Javascript, React, React bootstrap, Deployed on Heroku, MongoDB.</p>
                <Button variant="secondary" size="sm" href="https://fathomless-stream-68190.herokuapp.com/">
                  Live Link
          </Button>
          <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/UnseenMountain/tamagotchi">
                    GitHub repo
           </Button>
                </div>
              </Media.Body>
            </Media>


            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="data:image/jpeg;base64,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"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">

                  <h3 className="text">Group Project 2</h3>
                  <p className="text">CASTR is a cross between Pinterest and Reddit/Quora.

                  Users sign up for an account and subscribe to their favorite creators. This is a space where creators can share a wide breadth of mediums including audio, art, literature, and video. It's a space where they can share, save, and start meaningful conversations around the different pieces creators have to offer.</p>
                  
                  <h3>Technologies used.</h3>
                  
                  <p>Javascript, CSS, Handlebars, MongoDB.</p>
            <Button variant="secondary" size="sm" href="http://podfire.herokuapp.com/landing">
              Live Link
          </Button>
          <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/cshjnim/CASTR.git">
                    GitHub repo.
           </Button>
                </div>
              </Media.Body>
            </Media>



            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="https://i.pinimg.com/736x/70/33/40/7033402094b61c41a083f4af7a9ef9a9.jpg"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">

                  <h3 className="text">RPG game</h3>
                  <p className="text">This is a turn based RPG game were you select a character and battle the others you win by defeating all your
              opponets. (PS: choose Keannu Reaves) </p>
              <h3>Technologies used.</h3>
                  <p>HTML 5, CSS, Javascript.</p>
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://unseenmountain.github.io/unit-4-game/">
                    Live App
           </Button>
           <Button variant="secondary" size="sm" href="https://github.com/UnseenMountain/unit-4-game">
                    GitHub repo
           </Button>
                </div>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="data:image/png;base64,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"
                alt="Generic placeholder"
              />
              <Media.Body>
              <div style={styles.title} className="text-white">

                  <h3 className="text"> On Topic a 4 person group project</h3>
                  <p className="text">On Topic is a web app allowing users to search for keywords in three different API databases, returning
            results of articles and videos (sourced via YouTube) related to that keyword. This is all part of Team No
            Rest For The Students's Project One for UCLA's Fullstack Web Development Coding Bootcamp (September 2019 to
            March 2020).</p>
             <h3>Technologies used.</h3>
                  <p>Firbase, Newsy API Javascript Deployed on Heroku.</p>
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://origamiunicorn.github.io/No-Rest-For-The-Students/">
                    Live App
           </Button>
           <Button variant="secondary" size="sm" href="https://github.com/origamiunicorn/No-Rest-For-The-Students">
                    GitHub repo
           </Button>
                </div>
              </Media.Body>
            </Media>

            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="data:image/jpeg;base64,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"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">

                  <h3 className="text">Train station</h3>
                  <p className="text" >A search algorithm for a train station ticket machine to help the user find were they want to go.</p>
                  <h3>Technologies used.</h3>
                  <p>Firbase, Javascript Deployed on GitHub pages.</p>
                  
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://unseenmountain.github.io/train-station/">
                    Live app
           </Button>
                  <Button variant="secondary" size="sm" href="https://github.com/UnseenMountain/train-station">
                    GitHub repo
           </Button>
                </div>
              </Media.Body>
              

            </Media>
            
            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="data:image/jpeg;base64,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"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">

                  <h3 className="text">Gifi API</h3>
                  <p className="text"> Seach your favorite video game gifs with this API application. </p>
                  <h3>Technologies used.</h3>
                  <p>HTML5 Javascript, Bulma CSS.</p>
                  
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/UnseenMountain/Gify-cool-api">
                    Live app
           </Button>
                  <Button variant="secondary" size="sm" href="https://unseenmountain.github.io/unit-4-game/">
                    GitHub repo
           </Button>
                </div>
              </Media.Body>
              

            </Media>
            
            <Media>
              <img
                width={300}
                height={300}
                className="mr-3"
                src="data:image/jpeg;base64,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"
                alt="Generic placeholder"
              />
              <Media.Body>
                <div style={styles.title} className="text-white">

                  <h3 className="text">Clikey game</h3>
                  <p className="text"> A simple memorie game see if you can remember all the characters. </p>
                  <h3>Technologies used.</h3>
                  <p>React, react bootstrap.</p>
                  
                  <Button style={styles.pad} variant="secondary" size="sm" href="https://github.com/UnseenMountain/picture-games">
                    Live app
           </Button>
                  <Button variant="secondary" size="sm" href="https://polar-taiga-65488.herokuapp.com/">
                    GitHub repo
           </Button>
                </div>
              </Media.Body>
              

            </Media>

          </Fade>
        </div>

      </Fragment>
    );
  }
}

const styles = {

  block: {

    borderBottom: "3px solid rgb(212, 212, 212)",

    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    background: '#000',

  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 100,
    padding: 60,
  },

  pad: {
      
      margin: 10
  }
};

















