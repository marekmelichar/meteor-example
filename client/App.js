import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render(){
    return(
      <h1>Hello World</h1>
    );
  }
}

// if (Meteor.isClient) {
//   Meteor.startup(function() {
//     ReactDOM.render(<App />, document.getElementById('render-target'));
//   });
// }

// Meteor.startup(function() {
//   ReactDOM.render(<App />, document.getElementById('render-target'));
// });
