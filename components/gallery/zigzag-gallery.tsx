/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { MEDIA_DESKTOP, CSS_ABSOLUTE_FULL, MEDIA_MOBILE, CSS_BACKGROUND_IMAGE_COVER,
  COLOR_TEXT, COLOR_TEXT_INVERT_DARKER, FONT_B, COLOR_PRIMARY } from '../../src/var'

const itemGenerator = (v: ZigzagGalleryItemData, isOdd: boolean) => {
  return (<div
      className={
        'zg__items'
        + (isOdd ? ' zg__items--odd' : '')
      }
      css={css`{

    display: flex;
    flex-direction: column;
    ${MEDIA_DESKTOP} {
      width: 574px;
      height: 510px;
      transform: translateY(-110px);
    }
    ${MEDIA_MOBILE} {
      width: 42.5vw;
      height: 39vw;
      transform: translateY(-8vw);
    }
    &.zg__items--odd {
      transform: none;
    }
  }`}>
    <div className='zg__items__image' css={css`{
      ${CSS_BACKGROUND_IMAGE_COVER}
      ${MEDIA_DESKTOP} {
        width: 100%;
        height: 430px;

        background-image: url("${v.imgSrc}");
      }
      ${MEDIA_MOBILE} {
        width: 100%;
        height: 32vw;
        background-image: url("${v.imgSrcM || v.imgSrc}");
      }
    }`}></div>
    <div className='zg__items__title' css={css`{
      color: ${COLOR_TEXT_INVERT_DARKER};
      font-family: ${FONT_B};
      line-height: 1.5;
      ${MEDIA_DESKTOP} {
        font-size: 23px;
      }
      ${MEDIA_MOBILE} {
        font-size: 3vw;
      }
    }`}>{
      v.title
    }</div>
  </div>)
}

export type ZigzagGalleryItemData = {
  imgSrc: string,
  imgSrcM?: string,
  title: string
}

type Props = {
  items: ZigzagGalleryItemData[]
}

const ZigzagGallery: React.FunctionComponent<Props> = (props) => {
  return (<div className='zg' css={css`{
    position: relative;
    overflow: hidden;
  }`}>
    <div className='zg__bg_container' css={css`{
      ${CSS_ABSOLUTE_FULL}
      z-index: -50;
      ${MEDIA_DESKTOP} {
        padding-top: 600px;
      }
      ${MEDIA_MOBILE} {
        padding-top: 70vw;
      }
    }`}>
      <div className='zg__bg' css={css`{
        width: 100%;
        height: 100%;
        ${CSS_BACKGROUND_IMAGE_COVER}
        background-image: url("/img/example1.jpg");
        filter: grayscale(100%) brightness(10%);
      }`}></div>
    </div>
    <div className='zg__limiter' css={css`{
      ${MEDIA_DESKTOP} {
        position: relative;
        width: 1200px;
        height: 100%;
        margin: 0 auto;
      }
    }`}>
      <div className='zg__title' css={css`{
        color: ${COLOR_TEXT};
        font-family: ${FONT_B};
        ${MEDIA_DESKTOP} {
          margin: 200px 0 150px 0;

          font-size: 48px;
          line-height: 1.5;
        }
        ${MEDIA_MOBILE} {
          margin: 25vw 0 15vw 5vw;

          font-size: 7vw;
          line-height: 1.7;
        }
      }`}>
        ZigzagGallery.tsx<br/>
        (Extra line)
      </div>
      <div className='zg__list' css={css`{
        display: flex;
        flex-direction: column;
        ${MEDIA_MOBILE} {
          margin: 0 5vw;
        }
      }`}>{
        (new Array(Math.ceil(props.items.length/2))).fill(null).map((_, i) => {
          const v = props.items[i*2]
          const v2 = props.items[i*2 + 1]

          return (<div key={i} className='zg__items_row' css={css`{
            display: flex;
            justify-content: space-between;
          }`}>
            { // Show only not odd
              v2
                ? itemGenerator(v2, true)
                : (<div className='zg__items zg__items--placeholder' css={css`{

                }`}></div>)
            }
            { itemGenerator(v, false) }
          </div>)
        })
      }</div>
      <div className='zg__footer' css={css`{
        display: flex;
        align-items: center;
        ${MEDIA_DESKTOP} {
          height: 380px;
        }
        ${MEDIA_MOBILE} {
          height: 60vw;

          flex-direction: column;
          justify-content: center;
        }
      }`}>
        <div className='zg__footer__title' css={css`{
          color: ${COLOR_PRIMARY};
          line-height: 1.7;
          ${MEDIA_DESKTOP} {
            flex: 1 0 auto;

            font-size: 35px;
          }
          ${MEDIA_MOBILE} {
            margin-bottom: 5vw;

            flex: 0 0 auto;

            font-size: 5vw;
            text-align: center;
          }
        }`}>
          zg__footer__title<br/>
          <span css={css`{ font-family: ${FONT_B}; }`}>(Extra line)</span>
        </div>
        <div className='zg__footer__btn_container' css={css`{
          flex: 0 0 auto;

          display: flex;
          align-items: center;
        }`}>
          <div className='zg__footer__btn2' css={css`{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: transparent;
            border-radius: 3px;

            color: ${COLOR_PRIMARY};
            font-family: ${FONT_B};
            line-height: 1;
            cursor: pointer;
            user-select: none;
            ${MEDIA_DESKTOP} {
              width: 210px;
              height: 55px;
              margin-right: 24px;

              border: solid 2px ${COLOR_PRIMARY};

              font-size: 25px;
            }
            ${MEDIA_MOBILE} {
              width: 35vw;
              height: 10vw;
              margin-right: 4vw;

              border: solid 1px ${COLOR_PRIMARY};
            }
          }`}>소개서 다운받기</div>
          <div className='zg__footer__btn1' css={css`{
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: ${COLOR_PRIMARY};
            border-radius: 3px;

            color: ${COLOR_TEXT};
            font-family: ${FONT_B};
            line-height: 1;
            cursor: pointer;
            user-select: none;
            ${MEDIA_DESKTOP} {
              width: 210px;
              height: 55px;

              font-size: 25px;
            }
            ${MEDIA_MOBILE} {
              width: 35vw;
              height: 10vw;
            }
          }`}>상담 신청하기</div>
        </div>
      </div>
    </div>
  </div>)
}

export default ZigzagGallery
