import React, { Component } from 'react';
import './App.css';
import './fonts/font-awesome.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      src: ':8080'
    };

    this.updateIframe = this.updateIframe.bind(this);
  }

  updateIframe(e){
    this.setState({
      src: e
    })
  }

  render() {
    return (
        <div id="app">
          <iframe width="100%" height="100%" src={`http://192.168.1.249${this.state.src}`}></iframe>
          <div className="menu">
            <a onClick={ () => this.updateIframe(':8082')}  className="menu__item ">
              <i className="fa fa-film" aria-hidden="true"></i>
            </a>
            <a onClick={ () => this.updateIframe(':8081')}  className="menu__item ">
              <i  className="fa fa-television" aria-hidden="true"></i>
            </a>
          </div>
          <div className="menu menu--left">
            <a onClick={ () => this.updateIframe(':8080')}  className="menu__item ">
              <i className="fa fa-cloud-download" aria-hidden="true"></i>
            </a>
            <a onClick={ () => this.updateIframe(':8112')}  className="menu__item ">
              <i className="fa fa-download" aria-hidden="true"></i>
            </a>
          </div>
        </div>
    );
  }
}

export default App;
