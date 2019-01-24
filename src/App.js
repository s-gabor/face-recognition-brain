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
            input: '',
            imageUrl: 'https://scontent.fclj2-1.fna.fbcdn.net/v/t1.0-9/50411514_10213490605323527_4480036934273466368_n.jpg?_nc_cat=108&_nc_ht=scontent.fclj2-1.fna&oh=74caa8bbf41e1924a00e7839387844f1&oe=5CFBE8F1'
        }
    }

    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({input: event.target.value});
        console.log(this.state.input)
    }

    onButtonClick = () => {
        // when clicked it displays the new image 
        this.setState({imageUrl: this.state.input});
        // fetch response from Clarifai API
        app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
          .then(response => {
            // get nested info from clarifai documentation
            console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
            <FaceRecognition 
                imageUrl={this.state.imageUrl}
            />
          </div>
        );
    }
}

export default App;
