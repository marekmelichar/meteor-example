import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(Component) {

  resolutions() {
    return Resolutions.find().fetch();
  }

  addResolution(event){
    event.preventDefault();
    let text = this.refs.resolution.value.trim();

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    });

    this.refs.resolution.value = "";
  }

  render(){
    let res = this.resolutions();
    console.log(res);
    return(
      <div>
        <h1>My Resolutions</h1>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input
            type="text"
            ref="resolution"
            placeholder="finish some stuff"
          />
        </form>
      </div>
    );
  }
}
