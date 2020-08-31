import React, { Component } from "react";
import Counter from "../Counter";
import AboutMe from "../AboutMe";
export default class Page extends Component {
  state = {
    count: 10,
  };

  handleCountChange = (newCount) => {
    console.log("newCount", newCount);
    this.setState({
      count: newCount,
    });
  };

  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        {this.props.showCounter === true ? (
          <Counter
            count={this.state.count}
            changeCount={this.handleCountChange}
          />
        ) : null}
        {this.props.description && this.props.description.length > 0 ? (
          <AboutMe text={this.props.description} />
        ) : null}
      </>
    );
  }
}

// Create a new component (np matter what name), that depending on prop value
