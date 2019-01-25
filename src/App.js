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
            imageUrl: 'https://scontent.fclj2-1.fna.fbcdn.net/v/t1.0-9/50411514_10213490605323527_4480036934273466368_n.jpg?_nc_cat=108&_nc_ht=scontent.fclj2-1.fna&oh=74caa8bbf41e1924a00e7839387844f1&oe=5CFBE8F1',
            box: {}
        }
    }

    onInputChange = (event) => {
        // console.log(event.target.value);
        this.setState({input: event.target.value});
        console.log(this.state.input)
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; // -> {top_row: ..., left_col: ..., bottom_row: ..., right_col: ...}
        const image = document.getElementById('input-image');
        const width = Number(image.width);
        const height = Number(image.height);
        // console.log(width, height);
        // // code here
        // console.log(data);
        // console.log(clarifaiFace);
        return {
            left_col: width * clarifaiFace.left_col,
            top_row: height * clarifaiFace.top_row,
            right_col: width - (width * clarifaiFace.right_col),
            bottom_row: height - (height * clarifaiFace.bottom_row)
        }
    }

    displayFaceBox = (box) => {
        this.setState({box: box});
        console.log(box);
    }

    onButtonClick = () => {
        // when clicked it displays the new image 
        this.setState({imageUrl: this.state.input});
        // fetch response from Clarifai API
        app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
          .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
          .catch(err => console.log(err));
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
                box = {this.state.box}
            />
          </div>
        );
    }
}

export default App;

// <div 
//     class="bounding-box 021063761-051509696-044575834-06488487" 
//     style="
//             top: 21.063761%; 
//             right: 35.11513000000001%; 
//             bottom: 48.490303999999995%; 
//             left: 44.575834%;"
//     >
// </div>











