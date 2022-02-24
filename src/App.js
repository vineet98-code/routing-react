import React from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Sidebar from "./component/SideBar";
import {
  BrowserRouter as Router,


} from "react-router-dom";


export default class App extends React.Component {
  state = {
    navClosed: false
  };
  changeNavbar = () => {
    this.setState({ navClosed: !this.state.navClosed });
  };
  render() {

    return (
      <Router>
        <div className={`container ${this.state.navClosed && "nav-closed"}`}>
          <Header changeNavbar={this.changeNavbar} />
          <div className="main">
            <Sidebar />
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}
