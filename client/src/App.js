import React, { Component } from "react";
import getWeb3 from "./utils/getWeb3";
import HospitalUpload from './components/HospitalUpload'
import InsuranceView from './components/InsuranceView'
import UserView from './components/UserView'
import "./App.css";
import web3 from './web3';

class App extends Component {
  
  render() {
    return(<InsuranceView   />);
  }
}
export default App;
