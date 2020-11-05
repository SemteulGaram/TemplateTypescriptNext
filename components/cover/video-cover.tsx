/** @jsxImportSource @emotion/core */
import { jsx, css } from '@emotion/core'
import { useEffect, useState } from 'react'

import { MEDIA_DESKTOP, CSS_ABSOLUTE_FULL, MEDIA_MOBILE, COLOR_TEXT_INVERT, CSS_FLEX_CENTER } from '../../src/var'

type Props = {
  videoSrc: string,
  videoWidth: number,
  videoHeight: number
}

const VideoCover: React.FunctionComponent<Props> = (props) => {
  const [ vVideoTop, setVVideoTop ] = useState<number>(0)
  const [ vVideoLeft, setVVideoLeft ] = useState<number>(0)
  const [ vVideoWidth, setVVideoWidth ] = useState<number>(0)
  const [ vVideoHeight, setVVideoHeight ] = useState<number>(0)

  useEffect(() => {
    // Ensure browser env
    try { window && document } catch { return }

    // Resize handle
    const resizeHandle = (): void => {
      try {
        const originRatio = props.videoWidth / props.videoHeight

        const vcElement = document.querySelector('.video_cover')
        const rect = vcElement.getBoundingClientRect()
        const screenRatio = rect.width/rect.height

        // width long
        if (screenRatio > originRatio) {
          const vHeight = (rect.width*props.videoHeight/props.videoWidth)
          setVVideoTop(rect.height - vHeight)
          setVVideoLeft(0)
          setVVideoWidth(rect.width)
          setVVideoHeight(vHeight)
        // height long
        } else {
          const vWidth = (rect.height*originRatio)
          setVVideoTop(0)
          setVVideoLeft((rect.width-vWidth)/2)
          setVVideoWidth(vWidth)
          setVVideoHeight(rect.height)
        }
      } catch (err) {
        console.error(err)
      }
    }

    // Un/register handle
    window.addEventListener('resize', resizeHandle)
    // ensure
    resizeHandle()
    return () => {
      window.removeEventListener('resize', resizeHandle)
    }
  })

  return (<div className='video_cover' css={css`{
    position: relative;
    overflow: hidden;
    ${MEDIA_DESKTOP} {
      height: 700px;
    }
    ${MEDIA_MOBILE} {
      height: 100vh;
    }
  }`}>
    <div className='video_cover__bg' css={css`{
      position: absolute;
      top: ${ vVideoTop }px;
      left: ${ vVideoLeft }px;
      width: ${ vVideoWidth }px;
      height: ${ vVideoHeight }px;
      z-index: -50;
    }`}>
      <video muted autoPlay loop css={css`{
        ${CSS_ABSOLUTE_FULL}

      }`}>
        <source src={ props.videoSrc } />
      </video>
    </div>
    <div className='video_cover__limiter' css={css`{
      ${CSS_ABSOLUTE_FULL}
      background-color: rgba(0,0,0,.5);
    }`}>
      <div className='video_cover__content' css={css`{
        ${CSS_ABSOLUTE_FULL}
        ${CSS_FLEX_CENTER}
        padding-top: 1em;

        color: ${COLOR_TEXT_INVERT};
        line-height: 1.36;
        text-align: center;
        ${MEDIA_DESKTOP} {
          font-size: 55px;
        }
        ${MEDIA_MOBILE} {
          font-size: 10vw;
        }
      }`}>
        video-cover.tsx
      </div>
    </div>
  </div>)
}

export default VideoCover
