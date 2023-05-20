import React from 'react'

function Myprops(props) {
    // console.log('Myprops:', props)
  return (
    <div>
        <h2>Myprops</h2>
        <p>My name is {props.name}</p>

    </div>
  )
}

export default Myprops