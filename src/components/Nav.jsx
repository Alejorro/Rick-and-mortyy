import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.navBar}>
        <NavLink to="/about">
          <button class ="boton" >About </button>
        </NavLink>
        <NavLink to="/home">
          <button class ="boton" >Home</button>
        </NavLink>
        <NavLink to="/favorites">
          <button class ="boton" >Favorites</button>
        </NavLink>
        <SearchBar onSearch={this.props.onSearch} />
      </div>
    );
  }
}

export default Nav;
