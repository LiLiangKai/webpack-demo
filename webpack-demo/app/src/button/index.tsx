import React from 'react'
import Tag from './tag'
import './style.scss'

const enum EType {
  'primary' = 'primary',
  'success' = 'success'
}

export interface IProps {
  label?: string
  type?: EType
}

const Button = (props = {} as IProps) => {
  const { label, type} = props
  return (
    <div className={`ele-button ${type}`}>{label}
      <Tag />
    </div>
  )
}

export default Button