/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'

import { MEDIA_DESKTOP, MEDIA_MOBILE, CSS_BOX_SHADOW, CSS_BACKGROUND_IMAGE_COVER, FONT_B, COLOR_TEXT, FONT_R, COLOR_TEXT_LIGHT, COLOR_GRAY_300, COLOR_GRAY_500 } from '../../src/var'
import SliderLinear2, { SLIDER_LINEAR2_CLASS, SLIDER_LINEAR2_ITEMS_CLASS } from './slider-linear2'

export type ReviewSliderReview = {
  imgSrc: string
  author: string
  content: string
}
type Props = {
  list: ReviewSliderReview[]
}

const ReviewSlider: React.FunctionComponent<Props> = (props) => {
  const [index, setIndex] = useState(0)
  const [popupOpen, setPopupOpen] = useState<boolean>(false)

  return (<div className='review_slider' css={css`{
    position: relative;
    overflow: hidden;

    user-select: none;
  }`}>
    <div className='rs__limiter' css={css`{
      position: relative;
      height: 100%;
      ${MEDIA_DESKTOP} {
        width: 1200px;
        margin: 0 auto;
      }
    }`}>
      <div className='rs__title' css={css`{
        color: ${COLOR_TEXT_LIGHT};
        line-height: 1;
        ${MEDIA_DESKTOP} {
          margin: 125px 0 0 0;

          font-size: 25px;
        }
        ${MEDIA_MOBILE} {
          margin: 16.81vw 7.5vw 0 7.5vw;

          font-size: 4.2vw;
        }
      }`}>REAL REVIEW</div>
      <div className='rs__slider' css={css`{
        position: relative;
        width: 100%;
        ${MEDIA_DESKTOP} {
          height: 320px;
          margin: 36px 0 0 0;
        }
        ${MEDIA_MOBILE} {
          height: 50vw;
          margin: 7vw 0 0 0;
        }
        .${SLIDER_LINEAR2_CLASS} {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .${SLIDER_LINEAR2_ITEMS_CLASS} {
          position: absolute;
          top: 0;
          left: 50%;
          height: 100%;
          opacity: 0;
          transform: translateX(-50%);

          display: flex;
          align-items: center;

          ${CSS_BOX_SHADOW}

          transition: transform 0.5s, opacity 0.5s;
          ${MEDIA_DESKTOP} {
            width: 1200px;
          }
          ${MEDIA_MOBILE} {
            width: 85vw;
          }
        }
        .${SLIDER_LINEAR2_ITEMS_CLASS}---1 {
          opacity: 0;
          transform: translateX(-200%);
        }
        .${SLIDER_LINEAR2_ITEMS_CLASS}--0 {
          opacity: 1;
          transform: translateX(-50%);
        }
        .${SLIDER_LINEAR2_ITEMS_CLASS}--1 {
          opacity: 0;
          transform: translateX(100%);
        }
        .rs__slider__items {
          width: 100%;
          overflow: hidden;

          display: flex;
          flex-direction: column;
          justify-content: center;
          ${MEDIA_DESKTOP} {
            padding: 30px 72px;
          }
          ${MEDIA_MOBILE} {
            padding: 2vw 5vw;
          }
        }
        .rs__slider__group1 {
          flex: 0 0 auto;

          display: flex;
          align-items: center;
        }
        .rs__slider__group2 {
          flex: 1 0 auto;
        }
        .rs__slider__profile {
          flex: 0 0 auto;

          ${CSS_BACKGROUND_IMAGE_COVER}
          border-radius: 50%;
          ${MEDIA_DESKTOP} {
            width: 70px;
            height: 70px;
          }
          ${MEDIA_MOBILE} {
            width: 10vw;
            height: 10vw;
          }
        }
        .rs__slider__author {
          margin-left: .6em;

          flex: 1 0 auto;

          color: ${COLOR_TEXT};
          font-family: ${FONT_B};
          line-height: 1;
          ${MEDIA_DESKTOP} {
            font-size: 20px;
          }
          ${MEDIA_MOBILE} {
            font-size: 3.6vw;
          }
        }
        .rs__slider__content {
          font-family: ${FONT_R};
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: keep-all;
          ${MEDIA_DESKTOP} {
            margin: 28px 0 0 0;

            font-size: 19px;
          }
          ${MEDIA_MOBILE} {
            margin: 3vw 0 0 0;
            font-size: 3.3vw;
          }
        }
      }`}>
        <SliderLinear2
          items={props.list.map((v, i) => {
            return (<div key={i} className='rs__slider__items'>
              <div className='rs__slider__group1'>
                <div className='rs__slider__profile'
                  style={{ backgroundImage: `url("${ v.imgSrc }")` }}></div>
                <div className='rs__slider__author'>{ v.author }</div>
              </div>
              <div className='rs__slider__group2'>
                <pre className='rs__slider__content'>{ v.content }</pre>
              </div>
            </div>)
          })}
          autoSlide
          autoSlideInterval={5000}
          additionalDisplayCount={1}
          additionalCss={null}
          getStore={store => {
            store.on('changeIndex', () => {
              setIndex(store.index)
            })
          }} />
      </div>
      <div className='rs__slider_indicator' css={css`{
        width: 100%;

        display: flex;
        justify-content: center;

        text-align: center;
        ${MEDIA_DESKTOP} {
          margin: 90px 0 100px 0;
        }
        ${MEDIA_MOBILE} {
          margin: 13vw 0 14vw 0;
        }
        & > .rs__slider_indicator__bar {
          background-color: ${COLOR_GRAY_300};
          ${MEDIA_DESKTOP} {
            width: 75px;
            height: 2px;
            margin: 0 4px;
          }
          ${MEDIA_MOBILE} {
            width: 12vw;
            height: 2px;
            margin: 0 2px;
          }
        }
        & > .rs__slider_indicator__bar--active {
          background-color: ${COLOR_GRAY_500};
        }
      }`}>
        <div className={ 'rs__slider_indicator__bar' + ((index%3 === 0) ? ' rs__slider_indicator__bar--active' : '') }></div>
        <div className={ 'rs__slider_indicator__bar' + ((index%3 === 1) ? ' rs__slider_indicator__bar--active' : '') }></div>
        <div className={ 'rs__slider_indicator__bar' + ((index%3 === 2) ? ' rs__slider_indicator__bar--active' : '') }></div>
      </div>
    </div>
  </div>)
}

export default ReviewSlider
