/** @jsxImportSource @emotion/core */
import { jsx, Interpolation } from '@emotion/core'
import React from 'react'
import { EventEmitter } from 'events'

import { shortUuidV4 } from '../../src/utils/uuid'
import { normalizeNumber } from '../../src/utils/normalize'

export class SliderLinear2Store extends EventEmitter {
  index: number
  count: number

  constructor () {
    super()
    this.index = 0
    this.count = 0
  }

  setChangeIndex (index: number) {
    this.index = normalizeNumber(index, 0, this.count)
    this.emit('changeIndex', this)
  }
}

export const SLIDER_LINEAR2_CLASS = 'slider_linear2'
export const SLIDER_LINEAR2_ITEMS_CLASS = 'slider_linear2__items'

type Props = {
  items: React.ReactElement[]
  autoSlide?: boolean
  autoSlideInterval?: number
  additionalDisplayCount?: number
  additionalCss?: Interpolation[]|Interpolation
  moveWhenClick?: boolean
  getStore?: (store: SliderLinear2Store) => void
}
type State = {
  className: string
  index: number
}

class SliderLinear2 extends React.Component<Props, State> {
  bindOnClickHandle: (this: SliderLinear2, index: number) => void
  intervalUid: NodeJS.Timeout|null
  store: SliderLinear2Store
  clickEvents: {
    element: HTMLElement
    callback: any
  }[]

  constructor (props: Readonly<Props>) {
    super(props)

    const minItemCount = (props.additionalDisplayCount ? (props.additionalDisplayCount*2)+1 : 2)
    if (props.items.length < minItemCount) {
      throw new Error(`Min item count is ${minItemCount}`)
    }

    // Init vars
    this.state = {
      className: '',
      index: 0
    }
    this.intervalUid = null
    this.clickEvents = []
    this.bindOnClickHandle = this._onClickHandle.bind(this)

    // Init store
    this.store = new SliderLinear2Store()
    this.store.count = props.items.length
    this.store.index = 0
    this.store.on('changeIndex', (store: SliderLinear2Store) => {
      this.setState({
        index: store.index
      })
    })

    // Callback
    if (this.props.getStore) {
      this.props.getStore(this.store)
    }
  }

  _onClickHandle (index: number): void {
    if (!this.props.moveWhenClick) return
    this.store.setChangeIndex(index)
  }

  componentDidMount (): void {
    if (!this.state.className) {
      this.setState({
        className: `${SLIDER_LINEAR2_CLASS}--${shortUuidV4()}`
      })
    }

    if (this.intervalUid === null) {
      this.intervalUid = setInterval(() => {
        this.store.setChangeIndex(this.store.index + 1)
      }, this.props.autoSlideInterval || 3000)
    }
  }

  componentWillUnmount (): void {
    if (this.intervalUid !== null) {
      clearInterval(this.intervalUid)
      this.intervalUid = null
    }
  }

  render (): React.ReactElement {
    const items: React.ReactElement[] = this.props.items.map((item, i) => {
      const halfCount = this.store.count/2
      let classIndex = Math.round(normalizeNumber(i - this.store.index, -halfCount, halfCount))
      const hasClassIndex = Math.abs(classIndex) <= (this.props.additionalDisplayCount || 0)
      const itemClass = [SLIDER_LINEAR2_ITEMS_CLASS]
      if (hasClassIndex) itemClass.push(`${SLIDER_LINEAR2_ITEMS_CLASS}--${classIndex}`)
      return (<div key={i} className={itemClass.join(' ')} onClick={() => { this.bindOnClickHandle(i) }}>{ item }</div>)
    })
    return (<div className={[SLIDER_LINEAR2_CLASS, this.state.className].join(' ')} css={this.props.additionalCss || null}>{ items }</div>)
  }
}

export default SliderLinear2
