import React, { Component } from 'react';
// const Clarifai = require('clarifai');
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'cfadf9345cbd4de08dd06a6871913006'
});

const particlesOption = {
            "particles": {
                "number": {
                    "value": 150
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }


class App extends Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonClick = () => {
        // fetch response from Clarifai API
        app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg')
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
    }
    
    render() {
        return (
          <div className="App">
            <Particles className='particles' params={particlesOption} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonClick={this.onButtonClick}
            />
            <FaceRecognition />
          </div>
        );
    }
}

export default App;
