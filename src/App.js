import React from 'react';
import Jumbotron from './Jumbotron.js';
import Navigation from './Navigation.js';
import About from './About.js';
import Sublink from './Sublink.js';
import Konten from './Konten.js';
import Footer from './Footer.js';



class App extends React.Component{
  render(){
    return(
      <div>
        <Jumbotron/>
        <Navigation/>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <About/>
              <Sublink/>
            </div>
            <div class="col-sm-8">
              <Konten/>
            </div>
           </div>
        </div>
        <Footer/>
      </div>
    );
  }
}


export default App;
