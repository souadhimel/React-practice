import React from 'react'

function Keyboard() {

    const textcopy=()=>{
        alert('text has been copied')
    }
    const textcut=()=>{
       console.log('text has been cut!!')
    }
    const textpaste=()=>{
       console.log('text has been pasted!!')
    }


  return (
    <div>
        
        <h2 onCopy={textcopy}>I am trying to on copy.</h2>
        <h2 onCut={textcut}>Trying to cut something.</h2>
        <input type="text" onPaste={textpaste} placeholder='Trying to paste something.'/>


    </div>
  )
}

export default Keyboard