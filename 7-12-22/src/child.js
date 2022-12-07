import React from 'react'
import PropTypes from "prop-types"
export const Child = (props) => {
  return (
    <div>{props.name} {props.roll} </div>
  )
}
Child.propTypes={
    name:PropTypes.string.isRequired,
    roll:PropTypes.number.isRequired
}
Child.defaultProps={
    name:"kartavya",
    roll:123,
}
export default Child;