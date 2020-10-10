/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { ComponentBase, DEFAULT_COMPONENT_MARGIN, DEFAULT_COMPONENT_MARGIN_M,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_M } from './@type/component-base'
import { MEDIA_DESKTOP, MEDIA_MOBILE } from '../src/var'

type Props = ComponentBase & {}

const Component: React.FunctionComponent<Props> = (props) => {
  return <div className='cp' css={[css`{
    position: relative;

    background-color: ${props.bgColor};

    color: ${props.color};
    ${MEDIA_DESKTOP} {
      padding: ${props.componentMargin || DEFAULT_COMPONENT_MARGIN};

      font-size: ${props.fontSize || DEFAULT_FONT_SIZE};
    }
    ${MEDIA_MOBILE} {
      padding: ${props.componentMargin || DEFAULT_COMPONENT_MARGIN_M};

      font-size: ${props.fontSize || DEFAULT_FONT_SIZE_M};
    }
  }`, props.additionalCss]}>
    <div className='cp__limiter' css={css`{
      position: relative;
      margin: 0 auto;
      ${MEDIA_DESKTOP} {
        width: 1200px;
      }
      ${MEDIA_MOBILE} {
        width: 90vw;
      }
    }`}>

    </div>
  </div>
}

export default Component
