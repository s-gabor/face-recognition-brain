import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


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
        console.log('ckick!');
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
            {/*<FaceRecognition />*/}
          </div>
        );
    }
}

export default App;
