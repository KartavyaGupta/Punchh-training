import React from "react";
import { addicecream, buyicecream, reseticecream } from "../redux";
import { connect } from "react-redux";
const Icecreamcontainer = (props) => {
  return (
    <div>
      <h2>num of icecream {props.numofIcreamey}</h2>
      <button onClick={props.buyicecreamy}>buy icecream</button>
      <button onClick={props.addicecreamy}>add icecream</button>
      <button onClick={props.reseticecreamy}>reset icecream</button>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    numofIcreamey: state.icecream.numofIcecreams,
  };
};
const mapStateToDispatch = (dispatch) => {
  return {
    buyicecreamy: () => {
      return dispatch(buyicecream());
    },
    addicecreamy: () => {
      return dispatch(addicecream());
    },
    reseticecreamy: () => {
      return dispatch(reseticecream());
    },
  };
};

export default connect(mapStatetoProps, mapStateToDispatch)(Icecreamcontainer);
