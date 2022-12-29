import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <React.Fragment>
          <div onClick={props.closeModal} className={classes.backdrop}></div>
          <Card>
            <div className={classes.modal}>{props.children}</div>
          </Card>
        </React.Fragment>,
        document.getElementById("modal")
      )}
    </React.Fragment>
  );
};

export default Modal;
