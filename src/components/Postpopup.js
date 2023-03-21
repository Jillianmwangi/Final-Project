import React, { useState } from 'react'

function Postpopup() {
    const [isAdded, setIsAdded] = useState([])
    const handleAddAnswer = ()=>{
        setIsAdded(!isAdded)
        console.log('user added swali');
    }

  return (
    <div className='postContainer'>
        <h2>Pose a Question Today!</h2>
        <p>Satisfy your curiosity by typing a question below</p>
        <input className='postInput' placeholder='Type question'></input>
        <button className='postBtn' onClick={handleAddAnswer}>Post</button>
      
    </div>
  )
}

export default Postpopup
