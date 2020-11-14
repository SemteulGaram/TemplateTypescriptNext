/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core'
import { useState } from 'react'
import { EventEmitter } from 'events'

import { ComponentBase, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_M } from '../@type/component-base'
import { COLOR_BG, COLOR_PRIMARY, COLOR_PRIMARY_BG, COLOR_TEXT, COLOR_WHITE, FONT_B, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'
import SliderLinear2 from '../slider/slider-linear2'
import BannerDetail from './bannerDetail'

export class TopBannerStore extends EventEmitter {
  constructor () {
    super()
  }

  setPopup (element: React.ReactElement) {
    // TopBanner가 이 이벤트를 핸들해야합니다
    this.emit('setPopup', element)
  }
}

export type IBanner = {
  title: string,
  titleLinkText: string,
  detailLinkText: string,
  detailLink: string,
  detailResourceLink: string
}

type TopBannerContentProps = IBanner & {
  store: TopBannerStore,
}
const TopBannerContent: React.FunctionComponent<TopBannerContentProps> = props => {
  return (<div className='top_banner_content' css={css`{
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    ${MEDIA_DESKTOP} {
      padding: 16px 5em 16px 16px
    }
    ${MEDIA_MOBILE} {
      padding: 3vw 4em 3vw 3vw;
    }
  }`}>
    <p className='tbc__title' css={css`{
      margin: 0;

      word-wrap: break-word;
      word-break: break-all;
      ${MEDIA_DESKTOP} {
        font-size: 24px;
      }
      ${MEDIA_MOBILE} {
        font-size: 5vw;
      }
    }`}>{ props.title }</p>
    <div className={'tbc__detail_btn'
        + (props.titleLinkText ? ' tbc__detail_btn--active' : '')}
        onClick={() => {
          document.querySelector('body').style.overflow = 'hidden'
          props.store.setPopup(<BannerDetail
              detailLinkText={props.detailLinkText}
              detailLink={props.detailLink}
              detailResourceLink={props.detailResourceLink}
              closeCallback={() => {
                document.querySelector('body').style.overflow = 'auto'
                props.store.setPopup(null)
              }}
          />)
        }}
        css={css`{
      display: none;

      background-color: ${COLOR_PRIMARY_BG};
      border-radius: 100em;

      color: ${COLOR_PRIMARY};
      cursor: pointer;
      ${MEDIA_DESKTOP} {
        padding: .25em .75em;
        margin-left: .5em;

        font-size: 18px;
      }
      ${MEDIA_MOBILE} {
        padding: .75em .75em;
        margin-left: .5em;

        font-size: 3vw;
      }
      &.tbc__detail_btn--active {
        display: inline-block;
      }
    }`}>{ props.titleLinkText }</div>
  </div>)
}

type Props = ComponentBase & {
  items: IBanner[]
  closeCallback: () => void
}
const TopBanner: React.FunctionComponent<Props> = (props) => {
  // Props 처리
  let doubleItems: IBanner[]
  if (props.items.length < 2) {
    doubleItems = props.items.concat(props.items).concat(props.items)
  } else if (props.items.length < 3) {
    doubleItems = props.items.concat(props.items)
  } else {
    doubleItems = props.items
  }

  // State
  const [ store ] = useState<TopBannerStore>(new TopBannerStore())
  const [ popup, setPopup ] = useState<React.ReactElement>(null)
  // Store 핸들러
  store.on('setPopup', (element: React.ReactElement): void => {
    setPopup(element)
  })

  return <div className='top_banner' css={[css`{
    position: relative;
    overflow: hidden;

    background-color: ${props.bgColor || COLOR_BG};

    color: ${props.color || COLOR_TEXT};
    font-family: ${FONT_B};
    ${MEDIA_DESKTOP} {
      height: 4em;
      padding: ${props.componentMargin || '0'};

      font-size: ${props.fontSize || DEFAULT_FONT_SIZE};
    }
    ${MEDIA_MOBILE} {
      height: 6em;
      padding: ${props.componentMarginM || '0'};

      font-size: ${props.fontSizeM || DEFAULT_FONT_SIZE_M};
    }
  }`, props.additionalCss]}>
    { popup }
    <div className='tb__limiter' css={css`{
      position: relative;
      height: 100%;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      ${MEDIA_DESKTOP} {
        width: 1200px;
      }
      ${MEDIA_MOBILE} {
        width: 100vw;
      }
    }`}>
      <SliderLinear2
          autoSlide={props.items.length > 1}
          autoSlideInterval={5000}
          additionalDisplayCount={1}
          items={
            doubleItems.map(v => {
              return <TopBannerContent
                  store={store}
                  title={v.title}
                  titleLinkText={v.titleLinkText}
                  detailLinkText={v.detailLinkText}
                  detailLink={v.detailLink}
                  detailResourceLink={v.detailResourceLink}
              />
            })
          }
          additionalCss={css`{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            & .slider_linear2__items {
              position: absolute;
              width: 100%;
              height: 100%;
              transform: 0;

              display: none;

              transition: transform .5s, opacity .5s;
            }
            & .slider_linear2__items---1 {
              transform: translate(-150%, 0);
              opacity: 0;

              display: inline-block;
            }
            & .slider_linear2__items--0 {
              opacity: 1;

              display: inline-block;
            }
            & .slider_linear2__items--1 {
              transform: translate(150%, 0);
              opacity: 0;

              display: inline-block;
            }
          }`}
      />
    </div>
    <div className='tb__close_btn'
        onClick={props.closeCallback}
        css={css`{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      cursor: pointer;
      user-select: none;
      ${MEDIA_DESKTOP} {
        right: 1em;
        width: 2em;
        height: 2em;
      }
      ${MEDIA_MOBILE} {
        right: 1em;
        width: 2.5em;
        height: 2.5em;
      }
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        transform: translateY(-1px) rotateZ(-45deg);

        background-color: ${COLOR_WHITE};
      }
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 2px;
        transform: translateY(-1px) rotateZ(45deg);

        background-color: ${COLOR_WHITE};
      }
    }`}>

    </div>
  </div>
}

export default TopBanner
