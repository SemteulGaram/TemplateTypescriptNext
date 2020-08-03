/** @jsx jsx */
// ImageSlider1 v1.0.0
// Warning: This component must use once each page for querying element issue
import { jsx, css } from '@emotion/core'
import React from 'react'
import { FONT_B, MEDIA_DESKTOP, MEDIA_MOBILE, COLOR_TEXT, COLOR_PRIMARY, COLOR_TEXT_LIGHT, COLOR_BG_DARKER } from '../../src/var'

const SLIDER_SPEED = 2

type Props = {
  imgSrcs: string[]
}
type State = {}
class ImageSlider1 extends React.Component<Props, State> {
  constructor (props: Readonly<Props>) {
    super(props)
    this.state = {}
  }

  componentDidMount (): void {
    if (!window || !document) return

    const imgList: HTMLElement[] = Array.prototype.slice.call(document.querySelectorAll('.is1 .is1__imgs > div'))
    const bar = document.querySelector('.is1 .is1__imgdesc__line__bar')
    const desc = document.querySelector('.is1 .is1__imgdesc__content')
    if (imgList && bar && desc) {
      let progress = 0
      let index = 0
      let count = imgList.length
      if (count < 3) {
        console.error('Too few images to create slider. There must be at least three.')
        return
      }

      const applyStyle = () => {
        imgList.forEach((v: HTMLElement, i: number) => {
          if (i === index+1 || i === index+1-count) {
            v.style.transform = 'translateX(105%)'
            v.style.opacity = '0'
          } else if (i === index-1 || i === index-1+count) {
            v.style.transform = 'translateX(-105%)'
            v.style.opacity = '0'
          } else if (i === index) {
            v.style.transform = 'none'
            v.style.opacity = '1'
          } else {
            v.style.transform = 'none'
            v.style.opacity = '0'
          }
        })
      }

      const changeIndex = () => {
        desc.textContent = `${ index+1 } / ${ count }`
      }

      applyStyle()
      changeIndex()
      setInterval(() => {
        if (progress < 100) {
          progress += SLIDER_SPEED
          if (progress > 100) progress = 100
        } else {
          progress = 0
          index++
          if (index === count) index = 0
          applyStyle()
          changeIndex()
        }
        (bar as HTMLElement).style.width = progress + '%'
      }, 100)
    } else {
      console.error('.s2__imgs, .s2__imgdesc__content, .s2__imgdesc__line__bar one of element not found.')
    }
  }

  render (): React.ReactElement {
    return (<div className='is1' css={css`{
      position: relative;
      overflow: hidden;
      ${MEDIA_DESKTOP} {
        width: 100%;
        height: 813px;
      }
      ${MEDIA_MOBILE} {
        width: 100%;
        height: 94.4vw;
      }
    }`}>
      <div className='is1__limiter' css={css`{
        position: relative;
        height: 100%;
        margin: 0 auto;
        ${MEDIA_DESKTOP} {
          width: 1200px;
        }
        ${MEDIA_MOBILE} {
          width: 86vw;
        }
      }`}>
        <h2 className='is1__title' css={css`{
          margin: 0;

          color: ${COLOR_TEXT};
          font-family: ${FONT_B};
          font-weight: normal;
          line-height: 1.38;
          ${MEDIA_DESKTOP} {
            padding: 112px 0 0 0;

            font-size: 40px;
          }
          ${MEDIA_MOBILE} {
            padding: 21.56vw 0 0 0;

            font-size: 5.6vw;
          }
        }`}>
          ImageSlider1
          <br/>
          여분의 줄
        </h2>
        <div className='is1__imgs' css={css`{
          position: relative;
          width: 100%;
          ${MEDIA_DESKTOP} {
            margin: 32px 0 0 0;
            height: 437px;
          }
          ${MEDIA_MOBILE} {
            margin: 5vw 0 0 0;
            height: 37.18vw;
          }
          & > div {
            position: absolute;
            width: 100%;
            height: 100%;
            transform: none;
            opacity: 1;

            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            transition: transform .5s, opacity .5s
          }
        }`}>{
          this.props.imgSrcs.map(v => {
            return (<div key={v} style={{ backgroundImage: `url("${v}")` }} />)
          })
        }</div>
        <div className='is1__imgdesc' css={css`{
          position: relative;
          width: 100%;

          display: flex;
          align-items: center;
          ${MEDIA_DESKTOP} {
            height: 32px;
          }
          ${MEDIA_MOBILE} {
            height: 5vw;
          }
        }`}>
          <div className='is1__imgdesc__line' css={css`{
            position: relative;
            height: 2px;

            flex: 1 0 auto;

            background-color: ${COLOR_BG_DARKER};
          }`}>
            <div className='is1__imgdesc__line__bar' css={css`{
              position: absolute;
              left: 0;
              top: 0;
              width: 0%;
              height: 100%;

              background-color: ${COLOR_PRIMARY};

              transition: width linear .1s;
            }`}></div>
          </div>
          <div className='is1__imgdesc__content' css={css`{
            margin: 0 1em;

            flex: 0 0 auto;

            color: ${COLOR_TEXT};
            font-family: ${FONT_B};
            line-height: 1;
            ${MEDIA_DESKTOP} {
              font-size: 15px;
            }
            ${MEDIA_MOBILE} {
              font-size: 2vw;
            }
          }`}>
            - / -
          </div>
        </div>
      </div>
    </div>)
  }
}

export default ImageSlider1
