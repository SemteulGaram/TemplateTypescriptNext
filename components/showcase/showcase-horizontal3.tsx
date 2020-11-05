/** @jsxImportSource @emotion/core */
// Showcase Horizontal3 v1.0.1
import { jsx, css } from '@emotion/core'

import { dateYY_MM_DD } from '../../src/utils/dateFormat'
import { MEDIA_DESKTOP, MEDIA_MOBILE, FONT_B, CSS_BACKGROUND_IMAGE_COVER, FONT_R,
  COLOR_PRIMARY, COLOR_TEXT, COLOR_BG, COLOR_TEXT_LIGHTER } from '../../src/var'
import { ComponentBase, DEFAULT_COMPONENT_MARGIN, DEFAULT_COMPONENT_MARGIN_M,
  DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_M } from '../@type/component-base'

export type Item = {
  imgSrc: string
  imgSrcM?: string
  title: string
  views: number
  date: Date
  link: string
}
export type Card1Props = {
  item: Item
}
export type Props = ComponentBase & {
  title: React.ReactElement
  items: Item[]
}

const Card1: React.FunctionComponent<Card1Props> = props => (<a href={props.item.link}
    target="_blank" css={css`{
  flex: 0 0 auto;

  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}`}>
  <div className='card1' css={css`{
    position: relative;
    ${MEDIA_DESKTOP} {
      width: 370px;
      margin: 0 20px;
    }
    ${MEDIA_MOBILE} {
      width: 90vw;
      margin: 8vw 0 4vw 0;
    }
  }`}>
    <div className='card1__image' css={css`{
      width: 100%;
      z-index: 0;

      background-image: url("${ props.item.imgSrc }");
      ${CSS_BACKGROUND_IMAGE_COVER}
      ${MEDIA_DESKTOP} {
        height: 195px;
      }
      ${MEDIA_MOBILE} {
        height: 45vw;

        background-image: url("${ props.item.imgSrcM || props.item.imgSrc }");
      }
    }`}></div>
    <div className='card1__content' css={css`{
      width: 100%;

      display: flex;
      flex-direction: column;
    }`}>
      <div className='card1__title' css={css`{
        color: ${COLOR_TEXT};
        font-family: ${FONT_B};
        line-height: 1.3;
        ${MEDIA_DESKTOP} {
          margin: 12px 0 0 0;

          font-size: 20px;
        }
        ${MEDIA_MOBILE} {
          margin: 3vw 0 0 0;
          font-size: 4vw;
        }
      }`}>{ props.item.title || '비어 있음' }</div>
      <div className='card1__footer' css={css`{
        display: flex;
        align-items: center;
        ${MEDIA_DESKTOP} {
          margin-top: 10px;
        }
        ${MEDIA_MOBILE} {
          margin-top: 1vw;
        }
      }`}>
        <div className='card1__views' css={css`{
          color: ${COLOR_PRIMARY};
          ${MEDIA_DESKTOP} {
            font-size: 16px;
          }
          ${MEDIA_MOBILE} {
            font-size: 3vw;
          }
        }`}>
          <span className='mdi mdi-eye'></span>&nbsp;
          { props.item.views }
        </div>
        <div className='card1__date' css={css`{
          color: ${COLOR_TEXT_LIGHTER};
          ${MEDIA_DESKTOP} {
            font-size: 16px;
          }
          ${MEDIA_MOBILE} {
            font-size: 3vw;
          }
        }`}>&nbsp;&nbsp;{ dateYY_MM_DD(props.item.date, '.') }</div>
      </div>
    </div>
  </div>
</a>)

const ShowcaseHorizontal3: React.FunctionComponent<Props> = props => {
  if (props.items.length !== 3) {
    throw new Error('props.items must have 3 children')
  }

  return (<div className={'sh3'} css={[css`{
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
    <div className='sh3__limiter' css={css`{
      position: relative;
      ${MEDIA_DESKTOP} {
        width: 1200px;
        margin: 0 auto;
      }
    }`}>
      <div className='sh3__group1'>
        <h2 className='sh3__title' css={css`{
          position: relative;
          margin: 0;

          font-family: ${FONT_R};
          line-height: 1.5;
          text-align: center;
          ${MEDIA_DESKTOP} {
            font-size: 38px;
          }
          ${MEDIA_MOBILE} {
            font-size: 5.5vw;
          }
        }`}>{
          props.title || 'showcase-horizontal3.tsx'
        }</h2>
      </div>
    </div>
    <div className='sh3__links' css={css`{
      position: relative;
      width: 100%;

      display: flex;
      justify-content: center;

      user-select: none;
      ${MEDIA_DESKTOP} {
        padding-top: 65px;
      }
      ${MEDIA_MOBILE} {
        padding: 0 5vw;
        padding-top: 3vw;

        flex-direction: column;
        align-items: center;
      }
    }`}>{
      props.items.map((v, i) => {
        return (<Card1
            key={i}
            item={v} />)
      })
    }</div>
  </div>)
}

export default ShowcaseHorizontal3
