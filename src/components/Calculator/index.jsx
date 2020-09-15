//props: https://reactjs.org/docs/components-and-props.html
import React, { Component } from "react";
import { render } from "@testing-library/react";

// const Counter = (props) => {
//   const increaseCount = () => {
//     props.changeCount(props.count + 1);
//   };
//   const decreaseCount = () => {
//     props.changeCount(props.count - 1);
//   };
//   // event: https://developer.mozilla.org/en-US/docs/Web/API/Event
//   // synthetic event: https://reactjs.org/docs/events.html
//   };

export default class Calculator extends Component {
  
  total = 0;
  
  add(x){
    this.total += x;
  }
  subtract(x){
    this.total -= x;
  }
  divide(x){
    this.total /= x;
  }  
  multiply(x){
    this.total *= x;
  }
  getTotal(){
    return this.total;
  }
  // events: https://www.w3schools.com/react/react_events.asp
  // input: https://www.w3schools.com/tags/tag_input.asp
  handleInput = (x) => {
    console.log(x.target.value);
  }
  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="count"
          value={this.count}
          onChange={this.handleInput}
        />
        <button type="button" onClick={this.add}>
          Add
        </button>
        <button type="button" onClick={this.multiply}>
          Multiply
        </button>
      </div>
    )
  };
};
