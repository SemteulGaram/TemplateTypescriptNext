import React from 'react'

type ClassComponentProps = {}
type ClassComponentState = {}

class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
  constructor (props: Readonly<ClassComponentProps>) {
    super(props)
  }

  render (): React.ReactElement {
    return (
      <div className='class_component'></div>
    )
  }
}

export default ClassComponent
