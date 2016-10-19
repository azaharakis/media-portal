import React, { Component } from 'react';
import Spinner from 'react-spin';
import './App.css';
import './fonts/font-awesome.css';

const HOSTNAME = 'http://192.168.1.249';
const APPS = {
  SERIES: ':8081',
  MOVIES: ':8082',
  NZB: ':8080',
  TORRENTS: ':8112'
};

var spinCfg = {
  lines: 17 // The number of lines to draw
  , length: 0 // The length of each line
  , width: 3 // The line thickness
  , radius: 20 // The radius of the inner circle
  , scale: 1 // Scales overall size of the spinner
  , corners: 1 // Corner roundness (0..1)
  , color: '#fff' // #rgb or #rrggbb or array of colors
  , opacity: 0.25 // Opacity of the lines
  , rotate: 0 // The rotation offset
  , direction: 1 // 1: clockwise, -1: counterclockwise
  , speed: 1 // Rounds per second
  , trail: 60 // Afterglow percentage
  , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
  , zIndex: 2e9 // The z-index (defaults to 2000000000)
  , className: 'spinner' // The CSS class to assign to the spinner
  , top: '15%' // Top position relative to parent
  , left: '95%' // Left position relative to parent
  , shadow: true // Whether to render a shadow
  , hwaccel: true // Whether to use hardware acceleration
  , position: 'absolute' // Element positioning
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      src: ':8081',
      loading:false
    };

    this.updateIframe = this.updateIframe.bind(this);
  }

  componentDidUpdate() {
    this.app.style.display = 'none';
    this.app.style.display = 'block';
  }

  updateIframe(e){
    this.setState({
      src: e,
      loading:true
    })
  }

  render() {
    return (
        <div id="app" ref={(ref) => this.app = ref}>
          {this.state.loading && <Spinner config={spinCfg} />}
          <iframe onLoad={() => this.setState({loading:false })} scrolling="auto" width="100%" height="100%" src={`${HOSTNAME}${this.state.src}`}></iframe>
          <div className="menu menu--right">
            <a onClick={ () => this.updateIframe(APPS.MOVIES)}  className="menu__item ">
              <i className="fa fa-film" aria-hidden="true"></i>
            </a>
            <a onClick={ () => this.updateIframe(APPS.SERIES)}  className="menu__item ">
              <i  className="fa fa-television" aria-hidden="true"></i>
            </a>
          </div>
          <div className="menu menu--left">
            <a onClick={ () => this.updateIframe(APPS.NZB)}  className="menu__item ">
              <i className="fa fa-cloud-download" aria-hidden="true"></i>
            </a>
            <a onClick={ () => this.updateIframe(APPS.TORRENTS)}  className="menu__item ">
              <i className="fa fa-download" aria-hidden="true"></i>
            </a>
          </div>
        </div>
    );
  }
}

export default App;
