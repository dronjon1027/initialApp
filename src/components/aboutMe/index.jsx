import React, {Component} from "./node_modules/react";

export default class AboutMe extends Component {
  render() {
      return (
        <>
            <h2>About Me</h2>
            <p>{this.props.description}</p>
        </>
      )
  }
}


// const AboutMe = (props) => {
//   return <p>{props.description}</p>;
// };
// export default AboutMe;
