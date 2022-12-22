

import React from 'react'

const Button = ({incr}) => {
  console.log('button')
  return (
    <div>
      <button onClick={incr}>Click me</button>
    </div>
  )
}

export default Button
