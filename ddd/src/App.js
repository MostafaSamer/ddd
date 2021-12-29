import React, { Component } from 'react';
import ReactThreeFbxViewer from 'react-three-fbx-viewer';

let fbxUrl = require('./Laptop.fbx');

export default class App extends Component {
  onLoad(e) {
    console.log(e);
  }

  onError(e) {
    console.log(e);
  }
  render () {
    let cameraPosition = {
      x:150/2,
      y:150,
      z:100
    }
    return (
      <div>
        <ReactThreeFbxViewer 
        cameraPosition={cameraPosition}
        url={fbxUrl}
        backgroundColor={'#8a2222'}
        onLoading={this.onLoad}
        onError={this.onError}/>
      </div>
    );
  }
}