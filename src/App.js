import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
            imageUrl: '',
            box: {},
            route: 'signin', // 3 options: signin / register / home
            isSignedIn: false,
            user: {
                id: '', 
                name: '',
                email: '',
                password: '',
                rank: 0,
                joined: ''
            }
        }
    }

    loadUser = (userData) => {
        console.log('userData from app/loadUser: ', userData);
        this.setState({user:{
            id: userData.userId,
            name: userData.name,
            email: userData.email,
            rank: userData.rank,
            joined: userData.joined,
        }})
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box; // -> {top_row: ..., left_col: ..., bottom_row: ..., right_col: ...}
        const image = document.getElementById('input-image');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            left_col: width * clarifaiFace.left_col,
            top_row: height * clarifaiFace.top_row,
            right_col: width - (width * clarifaiFace.right_col),
            bottom_row: height - (height * clarifaiFace.bottom_row)
        }
    }

    displayFaceBox = (box) => {
        this.setState({box: box});
    }

    onButtonClick = () => {
        // when clicked it displays the new image 
        this.setState({imageUrl: this.state.input});
        // fetch response from Clarifai API
        app.models
            .predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
            .then(response => {
                if (response) {
                    // fetch user data
                    fetch('http://localhost:3000/image', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userId: this.state.user.id // must create the user in state
                        })
                    })
                    .then(response => response.json())
                    .then(userObj => {
                        // update user rank with each new image submit
                        let user = Object.assign({}, this.state.user);
                        user.rank = userObj.rank;
                        this.setState({user});
                    })
                }
                this.displayFaceBox(this.calculateFaceLocation(response));
            })
            .catch(err => console.log(err));
    }

    onRouteChange = (route) => {
        if (this.state.route === 'signout') {
            this.setState({isSignedIn: false})
        } else if (this.state.route === 'signin') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    }
    
    render() {
        return (
            <div className="App">
                <Particles className='particles' params={particlesOption} />  
                <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
                {this.state.route === 'home'
                    ?   <div>
                            <Logo />
                            <Rank name={this.state.user.name} rank={this.state.user.rank}/>
                            <ImageLinkForm 
                                onInputChange={this.onInputChange} 
                                onButtonClick={this.onButtonClick}
                            />
                            <FaceRecognition 
                                imageUrl={this.state.imageUrl}
                                box = {this.state.box}
                            />
                        </div>
                    :   (this.state.route === 'signin'
                            ?   <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                            :   <Register onRouteChange={this.onRouteChange}/>
                        )
                }   
            </div>
        );
    }
}

export default App;










