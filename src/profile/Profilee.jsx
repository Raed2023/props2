import React from 'react'
import propTypes from 'prop-types'
const Profilee = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.ABC.fullName}</h1>
        <h3>{props.ABC.profession}</h3>
        <p>{props.ABC.bio}</p>
        <img src={props.children} alt="" />
        <button onclick={() =>  props.handleName(props.ABC.fullName)}>Click Me</button> 
        
    </div>
  )
}
Profilee.defaultProps ={
fullName : '.....',
bio : '.....',
profession :'.....'

}

Profilee.propTypes={

fullName : propTypes.string,
bio : propTypes.string,
profession : propTypes.string
}

export default Profilee