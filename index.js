import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }
  changeHandler(evt){
    console.log("val",evt.target.value)
    this.value = evt.target.value;
  }
  btnHandler(){
    console.log(this.value)
  }

  render() {
    return (
      <div>
        <input type="text" onBlur={() => this.changeHandler(event)} />
        <input type="button" onClick={()=>this.btnHandler()} value="Go" />
          <p>
            Start editing to see some magic happen :)
        </p>
      </div>
        );
      }
    }
    
render(<App />, document.getElementById('root'));
