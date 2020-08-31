import React, { Component } from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

class App extends Component {
  // https://www.w3schools.com/react/react_state.asp
  aboutMeDescription = "My name is Davron."
  state = {
    currentPage: "home",
  };

  onPageClick = (pageName) => {
    this.setState({
      currentPage: pageName,
    });
  };

  render() {
    return (
      <>
        <h1>Davron App</h1>
        <nav>
          <button onClick={() => this.onPageClick("home")}>Home</button>
          <button onClick={() => this.onPageClick("projects")}>Projects</button>
          <button onClick={() => this.onPageClick("about")}>About me</button>
          <button onClick={() => this.onPageClick("contact")}>Contact me</button>

        </nav>
        <div className="page">
          {this.state.currentPage === "home" ? <Home/> : null}
          {this.state.currentPage === "projects" ? (<Projects/>) : null}
          {this.state.currentPage === "about" ? (<AboutMe description={this.aboutMeDescription}/>) : null}
          {this.state.currentPage === "contact" ? (<Contact/>) : null}

        </div>
      </>
    );
  }
}
// About me should take some information and display it in the page. Create a new component that displays that information. So if
export default App;


/// practice some more state:
///Change counter to class component and call it calculator
// 2 input fields that you type in the number and has 4 buttons (+,-,*,/). the buttons shoould say multpily, substract and etc
// when you enter numbers in the field and click one of the buttons it should perform calclutating operations and display the total at the bottom.

