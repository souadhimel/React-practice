import React from 'react'

function Parent(props) {
    console.log(props)
  return (
    <div> <h2>Parent's info</h2>
    <p>{props.name}</p>
    <p>{props.age}</p>

    </div>
  )
}

export default Parent