import React, { Component } from 'react';
import './App.css';
import './hover.js';
import 'w3-css/w3.css';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import "animate.css/animate.min.css";
import { Route, Switch } from 'react-router-dom'
import Home1 from './pages/Home1';
import Keawwan from './pages/Keawwan'
import Tomyum from './pages/Tomyum'
import Kangped from './pages/Kangped'
import Kangleang from './pages/Kangleang'




// Add the icon to the library so you can use it in your page
fontawesome.library.add(solid.faUser)

class App extends Component {
  render() {
    return (
      <div class="font2">
        <div>
          <Switch>
          <Route exact path="/"  component={Home1} onUpdate={() => window.scrollTo(0, 0)} />
          <Route path="/Keawwan" component={Keawwan} onUpdate={() => window.scrollTo(0, 0)} />
          <Route path="/Tomyum" component={Tomyum} onUpdate={() => window.scrollTo(0, 0)} />
          <Route path="/Kangped"  component={Kangped} onUpdate={() => window.scrollTo(0, 0)} />
          <Route path="/Kangleang" component={Kangleang} onUpdate={() => window.scrollTo(0, 0)} />
          </Switch>
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
