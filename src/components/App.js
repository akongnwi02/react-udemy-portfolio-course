import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/PROFILE 4X4.jpeg';
import Title from './Title';
class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    };
    render() {
        return (
            <div>
                <img src={profile} alt='profile-picture' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is David.</p>
                    <Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Live  in san francisco and code everyday.</p>
                            <p>My favorite language is Javascript, and I lthink React.js is awesome.</p>
                            <p>Besides coding, I love music and ramen!</p>
                            <button onClick={this.toggleDisplayBio}>
                                Show less
                            </button>
                        </div>
                    ): (
                        <div>
                            <button onClick={this.toggleDisplayBio}>
                                Read more
                            </button>
                        </div>
                    )
                }
                <hr/>
                <Projects />
                <hr/>
                <SocialProfiles />
            </div>
        );
    }
}

export default App;