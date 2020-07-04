/** @jsx jsx */
import { jsx } from '@emotion/core'
type Props = {}

const Component: React.FunctionComponent<Props> = (props) => (<div className='component'>
  <div className='s1__limiter'>
  </div>
  <style jsx>{`
  @media screen and (min-width: 800px) {

  }

  @media screen and (max-width: 799px) {

  }
  `}</style>
</div>)

export default Component
