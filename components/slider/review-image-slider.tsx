/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState, useEffect } from 'react'

import { MEDIA_DESKTOP, MEDIA_MOBILE, CSS_BACKGROUND_IMAGE_CONTAIN } from '../../src/var'
import SliderLinear2, { SliderLinear2Store } from './slider-linear2'

type Props = {
  items: {
    imgSrc: string,
    imgSrcM?: string,
    title: string
  }[]
}

const ReviewImageSlider: React.FunctionComponent<Props> = (props) => {
  const [ store, setStore ] = useState<SliderLinear2Store|null>(null)
  const [ index, setIndex ] = useState<number>(0)

  useEffect(() => {
    if (store) {
      const callback = () => {
        setIndex(store.index)
      }
      store.on('changeIndex', callback)

      return () => {
        store.removeListener('changeIndex', callback)
      }
    }
  })

  return (<div className='ris' css={css`{
    overflow: hidden;
    ${MEDIA_DESKTOP} {
      width: 100%;
      min-width: 1240px;
      height: 821px;
    }
    ${MEDIA_MOBILE} {
      width: 100%;
      height: 125.83vw;
    }
  }`}>
    <div className='ris__limiter' css={css`{
      position: relative;
      height: 100%;
      ${MEDIA_DESKTOP} {
        width: 1200px;
        margin: 0 auto;
      }
    }`}>
      <div className='ris__title' css={css`{
        position: absolute;

        background-image: url("/ris/title.png");
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: contain;
        ${MEDIA_DESKTOP} {
          top: 125px;
          left: 50%;
          width: 158px;
          height: 29px;
          transform: translateX(-50%);
        }
        ${MEDIA_MOBILE} {
          top: 16.81vw;
          left: 50%;
          width: 29.44vw;
          height: 5.83vw;
          transform: translateX(-50%);
        }
      }`}>review-image-slider.tsx</div>
      <div className='ris__slider' css={css`{
        position: relative;
        width: 100%;
        height: 100%;
        .slider_linear2__items {
          position: absolute;
          opacity: 0;
          transform: translateX(-50%);

          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;

          transition: transform 0.5s, opacity 0.5s;
          ${MEDIA_DESKTOP} {
            top: 183px;
            left: 50%;
            width: 853px;
            height: 571px;
          }
          ${MEDIA_MOBILE} {
            top: 26.53vw;
            left: 50%;
            width: 100vw;
            height: 89.44vw;
          }
        }

        .slider_linear2__items---2 {
          opacity: 0;
          transform: translateX(-400%);
          ${MEDIA_MOBILE} {
            transform: translateX(-400%);
          }
        }

        .slider_linear2__items---1 {
          opacity: 0.3;
          transform: translateX(-300%);
          ${MEDIA_MOBILE} {
            transform: translateX(-300%);
          }
        }

        .slider_linear2__items--0 {
          opacity: 1;
          transform: translateX(-50%);
          ${MEDIA_MOBILE} {
            transform: translateX(-50%);
          }
        }

        .slider_linear2__items--1 {
          opacity: 0.3;
          transform: translateX(200%);
          ${MEDIA_MOBILE} {
            opacity: 1;
            transform: translateX(200%);
          }
        }

        .slider_linear2__items--2 {
          opacity: 0;
          transform: translateX(300%);
          ${MEDIA_MOBILE} {
            transform: translateX(300%);
          }
        }
      }`}>
        <SliderLinear2
            autoSlide={false}
            autoSlideInterval={1000*60*60*24}
            additionalDisplayCount={2}
            moveWhenClick={false}
            getStore={ _store => { setStore(_store) }}
            items={props.items.map((v, i) => {
              return (<div key={i} css={css`{
                width: 100%;
                height: 100%;
                background-image: url("${v.imgSrc}");
                ${CSS_BACKGROUND_IMAGE_CONTAIN}
                ${MEDIA_MOBILE} {
                  background-image: url("${v.imgSrcM || v.imgSrc}");
                }
              }`}></div>)
            })} />
        <div className='ris__slider__prev_btn' onClick={() => {
          if (store) store.setChangeIndex(store.index-1) // Automaticaly normalize
        }} css={css`{
          position: absolute;

          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;

          cursor: pointer;
          user-select: none;
          ${MEDIA_DESKTOP} {
            top: 52%;
            left: 80px;
            width: 52px;
            height: 52px;

            background-image: url("/ris/prev.png");
          }
          ${MEDIA_MOBILE} {
            top: 52%;
            left: 6.11vw;
            width: 12.50vw;
            height: 12.50vw;
            background-image: url("/ris/prev-m.png");
          }
        }`}></div>
        <div className='ris__slider__next_btn' onClick={() => {
          if (store) store.setChangeIndex(store.index+1)
        }} css={css`{
          position: absolute;

          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;

          cursor: pointer;
          user-select: none;
          ${MEDIA_DESKTOP} {
            top: 52%;
            right: 80px;
            width: 52px;
            height: 52px;

            background-image: url("/ris/next.png");
          }
          ${MEDIA_MOBILE} {
            top: 52%;
            right: 6.11vw;
            width: 12.50vw;
            height: 12.50vw;
            background-image: url("/ris/next-m.png");
          }
        }`}></div>
        <div className='ris__slider__indicator' css={css`{
          display: none;
          ${MEDIA_DESKTOP} {
            position: absolute;
            top: 48%;
            right: 80px;
            width: 52px;
            overflow: visible;

            display: block;

            color: #707070;
            font-size: 20px;
            line-height: 1;
            text-align: center;
            white-space: nowrap;
          }
        }`}>{ index+1 }/{ store ? store.count : '-' }</div>
      </div>
    </div>
  </div>)
}

export default ReviewImageSlider
