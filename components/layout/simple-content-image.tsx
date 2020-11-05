/** @jsxImportSource @emotion/core */
// Simple Content & Image v1.0.0
import { jsx, css } from '@emotion/core'

import { ComponentBase, DEFAULT_COMPONENT_MARGIN, DEFAULT_COMPONENT_MARGIN_M,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_M } from '../@type/component-base'
  import { MEDIA_DESKTOP, MEDIA_MOBILE, CSS_BACKGROUND_IMAGE_CONTAIN, COLOR_BG, COLOR_TEXT } from '../../src/var'

type Props = ComponentBase & {
  content: React.ReactElement
  imgSrc: string
  imgSrcM?: string
  reverse?: boolean
  reverseM?: boolean
}

const SimpleContentImage: React.FunctionComponent<Props> = (props) => (<div className='sci' css={[css`{
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
  <div className='sci__limiter' css={css`{
    position: relative;

    display: flex;
    align-items: stretch;
    ${MEDIA_DESKTOP} {
      width: 1200px;
      margin: 0 auto;

      flex-direction: ${(props.reverse ? 'row-reverse' : 'row')};
    }
    ${MEDIA_MOBILE} {
      width: 90vw;
      margin: 0 auto;

      flex-direction: ${(props.reverse ? 'column-reverse' : 'column')};
    }
  }`}>
    <div className='sci__content' css={css`{
      ${MEDIA_DESKTOP} {
        width: 50%;
      }
    }`}>{ props.content }</div>
    <div className='sci__image' css={css`{
      ${CSS_BACKGROUND_IMAGE_CONTAIN}
      ${MEDIA_DESKTOP} {
        width: 50%;

        background-image: url('${props.imgSrc}');
      }
      ${MEDIA_MOBILE} {
        height: 90vw;

        background-image: url('${props.imgSrcM || props.imgSrc}');
      }
    }`}></div>
  </div>
</div>)

export default SimpleContentImage
