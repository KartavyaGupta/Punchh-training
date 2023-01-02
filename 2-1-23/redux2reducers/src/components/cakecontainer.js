import React from "react";
import { addcake, buycake, resetcake } from "../redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>number of cakes {props.numofCakey}</h2>
      <button onClick={props.buyCakey}>buy cake </button>
      <button onClick={props.addCakey}>add cake </button>
      <button onClick={props.resetCakey}>reset cake </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numofCakey: state.cake.numofCakes,
    // mystate: state,
  };
};
const mapStateToDispatch = (dispatch) => {
  console.log(dispatch);
  return {
    buyCakey: () => dispatch(buycake()),
    addCakey: () => {
      return dispatch(addcake());
    },
    resetCakey: () => {
      return dispatch(resetcake());
    },
  };
};
export default connect(mapStateToProps, mapStateToDispatch)(CakeContainer);