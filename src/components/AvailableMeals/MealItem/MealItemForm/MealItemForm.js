import React from "react";
import Input from "../../../UI/Input/Input";

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    return(
        <form className={classes.form} onSubmit={props.onAdd}>
            <Input id={props.id} />
            <button type="submit" className={classes.button}>+Add</button>
        </form>
    );
};

export default MealItemForm;