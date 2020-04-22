import React from 'react'
import { render } from 'react-dom'
import Button from './src/button/readme.mdx'

const Hello = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <Button />
      </div>
    </div>
  )
}
render(<Hello />, document.getElementById('root'))
