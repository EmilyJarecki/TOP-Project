import React, {useState} from 'react'

export const NavBar = () => {
const [count, setCount] = useState(0)

  return (
    <div>
        <p>You have clicked {count} spots.</p>
<button onClick={()=> setCount(count+1)}>move 1 spot</button>
    </div>
  )
}
