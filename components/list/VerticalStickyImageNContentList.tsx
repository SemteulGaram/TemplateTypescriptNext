/** @jsxImportSource @emotion/core */
import { jsx, css, Interpolation } from '@emotion/core'
import { useEffect, useState } from 'react'

import { msIeVersion } from '../../src/utils/ms-ie-version'
import { MEDIA_DESKTOP, MEDIA_MOBILE, isMobi, CSS_BOX_SHADOW, CSS_BACKGROUND_IMAGE_COVER } from '../../src/var'

type Props = {
  list: {
    content: React.ReactElement,
    imageSrc: string,
    imageSrcM?: string
  }[],
  additionalCss?: Interpolation,
  desktopImageRight?: boolean
}

const VerticalStickyImageNContentList: React.FunctionComponent<Props> = props => {
  // State part
  const [ desktopElement, setDesktopElement ] = useState<{
    index: number,
    imageSrc: string
  }>({
    index: -1,
    imageSrc: ''
  })
  const [ stickyEnable, setStickyEnable ] = useState<boolean>(false)

  // Effect part
  useEffect(() => {
    try { window && document } catch (_) { return }

    // Disable sticky when IE
    if (msIeVersion() === false
        && !stickyEnable) {
      setStickyEnable(true)
    }

    // Manuel Sticky apply
    const scrollHandle = () => {
      try { window && document } catch (_) { return }
      if (isMobi() || !stickyEnable) return

      // Scroll handle
      let index = 0
      let currentSectionBound: DOMRect
      do {
        currentSectionBound = document.querySelector('.vsicl__card--' + index).getBoundingClientRect()
      } while ((currentSectionBound.bottom - (window.innerHeight/2) < 0) && (++index < props.list.length))
      if (index === props.list.length) index--
      const element = props.list[index]
      if (desktopElement.index !== index) {
        setDesktopElement({
          index,
          imageSrc: element.imageSrc
        })
      }
    }
    window.addEventListener('scroll', scrollHandle)
    window.addEventListener('resize', scrollHandle)
    scrollHandle()

    return () => {
      window.removeEventListener('scroll', scrollHandle)
      window.removeEventListener('resize', scrollHandle)
    }
  })

  return (<div className={'vsicl' + (
    stickyEnable ? ' vsicl--sticky' : ''
  )} css={[css`{
    position: relative;
    width: 100%;

    ${ MEDIA_DESKTOP } {
      min-width: 1200px;
    }
    ${MEDIA_MOBILE} {
      display: flex;
      flex-direction: row;
    }
  }`, props.additionalCss]}>
    <div className='csicl__card__desktop__sticky_popup__container' css={css`{
      display: none;
      ${MEDIA_DESKTOP} {
        .vsicl--sticky & {
          position: absolute;
          top: 0;
          ${
            props.desktopImageRight
              ? 'right: 0;'
              : 'left: 0;'
          }
          width: 50%;
          height: 100%;

          display: block;
        }
      }

    }`}>
      <div className={'vsicl__card__desktop__sticky_popup'} css={css`{
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;

        background-image: url("${ desktopElement.imageSrc }");
        ${CSS_BACKGROUND_IMAGE_COVER}
        ${CSS_BOX_SHADOW}
      }`}></div>
    </div>
    <div className='vsicl__list' css={css`{
      width: 100%;
      overflow: hidden;

      flex: 0 0 auto;

      display: flex;
      flex-direction: column;
      ${MEDIA_DESKTOP} {
        width: 100%;
        .vsicl--sticky & {
          width: 50%;
          ${
            props.desktopImageRight
              ? ''
              : 'margin-left: 50%;'
          }
        }
      }
    }`}>{
      props.list.map((listItem, i) => { return (<div key={ i } className={ 'vsicl__card vsicl__card--' + i } css={css`{
        position: relative;

        display: flex;
        ${MEDIA_DESKTOP} {
          width: 100%;
          height: 100vh;
        }
        ${MEDIA_MOBILE} {
          height: 180vw;
          flex-direction: column;
        }
      }`}>
        <div className='vsicl__card__image_container' css={css`{
          flex: 0 0 auto;
          ${MEDIA_DESKTOP} {
            width: 50%;
            .vsicl--sticky & {
              width: 0%;
            }
          }
          ${MEDIA_MOBILE} {
            width: 100%;
            height: 67.22vw;
          }
        }`}>
          <div className='vsicl__card__image' css={css`{
            width: 100%;
            height: 100%;
            background-image: url("${listItem.imageSrc}");
            ${CSS_BACKGROUND_IMAGE_COVER}
            ${MEDIA_DESKTOP} {
              ${CSS_BOX_SHADOW}
            }
            ${MEDIA_MOBILE} {
              background-image: url("${listItem.imageSrcM || listItem.imageSrc}");
            }
          }`}></div>
        </div>
        <div className='vsicl__card__content' css={css`{
          position: relative;
          width: 100%;
        }`}>
          <div className='vsicl__card__content__chlidren' css={css`{
            position: relative;
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            ${MEDIA_DESKTOP} {
              position: absolute;
            }
            ${MEDIA_MOBILE} {
              padding: 5vw 6.67vw;
            }
          }`}>
            { listItem.content }
          </div>
        </div>
      </div>)})
    }</div>
  </div>)
}

export default VerticalStickyImageNContentList
