import React, { Component } from "react";
import api from "../../services/api";

import logo from "../../assets/logo.svg";
import "./styles.css";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = {
    newBox :''
  }

  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post('boxes',{
      title: this.state.newBox
    })
    console.log(response.data)
  };
  handleInputChange = (e) => {
    this.setState({
      newBox : e.target.value
    })
  }
  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit} action="">
          <img src={logo} alt="" />
          <input 
            placeholder="Criar um box" 
            value = {this.state.newBox}
            onChange={this.handleInputChange}
            />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}

export default Main;
