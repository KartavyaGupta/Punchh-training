import React from 'react'
import PropTypes from "prop-types"
export const Newchild = (props) => {
  return (
    <div>{props.children} </div>
  )
}
Newchild.propTypes={
    name:PropTypes.string.isRequired,
    roll:PropTypes.number.isRequired
}
Newchild.defaultProps={
    name:"kartavya",
    roll:123,
}
export default Newchild;