import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealData.name}</h3>
        <div className={classes.description}>{props.mealData.description}</div>
        <span className={classes.price}>${props.mealData.price}</span>
      </div>
      <MealItemForm id={props.mealData.id} onAdd={props.onAdd} />
    </li>
  );
};

export default MealItem;
