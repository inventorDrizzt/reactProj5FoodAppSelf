import React from "react";

import Card from "../UI/Card/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {props.mealList.map((meal) => {
            return (
              <MealItem key={meal.id} mealData={meal} onAdd={props.onAdd} />
            );
          })}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
