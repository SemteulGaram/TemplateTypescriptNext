/** @jsxImportSource @emotion/core */
import { jsx, Interpolation } from '@emotion/core'
import React from 'react'

type Props = {}
type State = {}

class Component extends React.Component<Props, State> {
  constructor (props: Readonly<Props>) {
    super(props)
  }

  render (): React.ReactElement {
    return (<div className='component'>

    </div>)
  }
}

export default Component
