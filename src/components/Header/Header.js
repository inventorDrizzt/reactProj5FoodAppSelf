import React from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import MealsSummary from "./MealSummary/MealsSummary";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton showCart={props.showCart} />
      </nav>
      <div className={classes["main-image"]}>
        <img src="./meals.jpg" alt="React meals Hero"></img>
      </div>
      <MealsSummary />
    </React.Fragment>
  );
};

export default Header;
