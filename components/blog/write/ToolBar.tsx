import React from 'react'

type ToolBarProps = {
  downloadTrigger: () => void
}
type ToolBarState = {}

class ToolBar extends React.Component<ToolBarProps, ToolBarState> {
  constructor (props: Readonly<ToolBarProps>) {
    super(props)
  }

  render (): React.ReactElement {
    return (
      <div className='toolbar'>
        <button onClick={ event => { this.props.downloadTrigger() } }>Save</button>
      </div>
    )
  }
}

export default ToolBar
