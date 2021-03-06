import React, { Component } from 'react';
import './App.css';
import './hover.js';
import 'w3-css/w3.css';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import "animate.css/animate.min.css";
import { Route,Router } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ScrollToTopRoute from './ScrollToTopRoute.js'
import Home1 from './pages/Home1';
import Keawwan from './pages/Keawwan';
import Tomyum from './pages/Tomyum';
import Kangped from './pages/Kangped';
import Kangleang from './pages/Kangleang';




// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid.faUser)

class App extends Component {
  render() {
    return (
      <div class="font2">
        <div>
          <ScrollToTopRoute exact path="/"  component={Home1} />
          <ScrollToTopRoute path="/Keawwan" component={Keawwan} />
          <ScrollToTopRoute path="/Tomyum" component={Tomyum} />
          <ScrollToTopRoute path="/Kangped"  component={Kangped} />
          <ScrollToTopRoute path="/Kangleang" component={Kangleang} />
        </div>
        <footer class="w3-center w3-black w3-padding-64">
          <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
          <div class="w3-xlarge w3-section">
            <i class="fa fa-Facebook w3-hover-opacity"></i>
            <i class="fa fa-Instagram w3-hover-opacity"></i>
            <i class="fa fa-Snapchat w3-hover-opacity"></i>
            <i class="fa fa-Pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-Twitter w3-hover-opacity"></i>
            <i class="fa fa-Linkedin w3-hover-opacity"></i>
          </div>
          <p> Powered by Zabs D </p>
        </footer>
      </div>
    );
  }
}

export default App;
