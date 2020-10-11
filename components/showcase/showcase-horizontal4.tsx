/** @jsx jsx */
// Showcase horizontal4 v1.0.0
import { jsx, css } from '@emotion/core'

import { ComponentBase, DEFAULT_COMPONENT_MARGIN, DEFAULT_COMPONENT_MARGIN_M,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_M } from '../@type/component-base'
import { COLOR_BG, COLOR_TEXT, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'
import H2TitleText from '../_text/h2-title-text'

type Props = ComponentBase & {
  title: React.ReactElement
  items: React.ReactElement[]
  additionalContent?: React.ReactElement
}

const ShowcaseHorizontal4: React.FunctionComponent<Props> = (props) => {
  if (!props.items || props.items.length !== 4) {
    throw new Error('props.items must have 4 items. but found ' + (props.items && props.items.length))
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
      <H2TitleText>{props.title}</H2TitleText>
      <div className='sh4__list' css={css`{
        width: 100%;
        display: flex;
        ${MEDIA_DESKTOP} {
          margin-top: 65px;
        }
        ${MEDIA_MOBILE} {
          margin-top: 7vw;

          justify-content: space-between;
          flex-wrap: wrap;
        }
        & > div {
          ${MEDIA_DESKTOP} {
            flex: 1 0 auto;
          }
          ${MEDIA_MOBILE} {
            width: 50%;

            flex: 0 0 auto;
          }
        }
      }`}>{
        props.items
      }</div>
      {props.additionalContent || null}
    </div>
  </div>
}

export default ShowcaseHorizontal4
