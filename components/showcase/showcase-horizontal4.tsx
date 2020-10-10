/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { ComponentBase, DEFAULT_COMPONENT_MARGIN, DEFAULT_COMPONENT_MARGIN_M,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_M } from '../@type/component-base'
import { COLOR_BG, COLOR_TEXT, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'

type Props = ComponentBase & {
  title: React.ReactElement
  items: React.ReactElement[]
}

const ShowcaseHorizontal4: React.FunctionComponent<Props> = (props) => {
  if (props.items || props.items.length !== 4) {
    throw new Error('props.items must have 4 items')
  }

  return <div className='sh4' css={[css`{
    position: relative;

    background-color: ${props.bgColor || COLOR_BG};

    color: ${props.color || COLOR_TEXT};
    ${MEDIA_DESKTOP} {
      padding: ${props.componentMargin || DEFAULT_COMPONENT_MARGIN};

      font-size: ${props.fontSize || DEFAULT_FONT_SIZE};
    }
    ${MEDIA_MOBILE} {
      padding: ${props.componentMarginM || DEFAULT_COMPONENT_MARGIN_M};

      font-size: ${props.fontSizeM || DEFAULT_FONT_SIZE_M};
    }
  }`, props.additionalCss]}>
    <div className='sh4__limiter' css={css`{
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

export default ShowcaseHorizontal4
