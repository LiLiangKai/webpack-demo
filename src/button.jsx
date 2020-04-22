import React from 'react'

const Button = () => {
  return (
    <div onClick={() => {
      alert(1)
    }}>button</div>
  )
}

export default Button