import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ThemeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the Theme</button>;
  }
}

export default ThemeToggle;
