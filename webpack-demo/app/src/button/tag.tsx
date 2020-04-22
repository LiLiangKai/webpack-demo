import React from 'react'

export interface IProps {
  label?: string
}

const Tag: React.FunctionComponent<IProps> = (props = {} as IProps) => {
  const {label = 'tag'} = props
  return <div>{label}</div>
}

export default Tag