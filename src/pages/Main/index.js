import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = () => {};
  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit} action="">
          <img src={logo} alt="" />
          <input placeholder="Criar um box" />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
