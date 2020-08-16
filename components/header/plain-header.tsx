/** @jsx jsx */
import { jsx, css, Interpolation } from '@emotion/core'
import Link from 'next/link'

import { MEDIA_DESKTOP, MEDIA_MOBILE, FONT_B, COLOR_PRIMARY_BG, COLOR_TEXT_LIGHT, COLOR_TEXT, COLOR_PRIMARY, COLOR_PRIMARY_HIGHLIGHT, COLOR_TEXT_INVERT } from '../../src/var'
import { useState, useEffect } from 'react'

type Props = {
  position?: 'fixed'|'absolute'|'relative'
  additionalCss?: Interpolation
}

const SCROLL_THRESHOLD = 10
const SCROLL_TOP_PX = 100
const HEADER_HIDE_CLASS = 'header--hide'
const HEADER_SCROLL_ON_TOP_CLASS = 'header--top'
const HEADER_MOBILE_MENU_OPEN = 'header--open'
let isHandleScrollMounted = false

const PlainHeader: React.FunctionComponent<Props> = (props) => {
  const [ isHidden, setIsHidden ] = useState<boolean>(false)
  const [ isTop, setIsTop ] = useState<boolean>(false)
  const [ isOpen, setIsOpen ] = useState<boolean>(false)
  const [ scrollHeaderClass, setScrollHeaderClass ] = useState<string>('')

  let lastScrollTop: number = -1
  const handleDynamicClass = (): void => {
    setScrollHeaderClass(
      (
        isOpen
        ? ' ' + HEADER_MOBILE_MENU_OPEN
        : (
            isHidden
            ? ' ' + HEADER_HIDE_CLASS
            : ''
          ) +
          (
            isTop
            ? ' ' + HEADER_SCROLL_ON_TOP_CLASS
            : ''
          )
      )
    )
  }

  const handleScroll = (): void => {
    if (!document) return
    const html = document.querySelector('html')
    if (!html) return
    const newScrollTop = html.scrollTop

    if (lastScrollTop === -1) {
      lastScrollTop = newScrollTop
    }

    // Header hide when scroll down and show when scroll up
    if (!isHidden && newScrollTop - lastScrollTop > SCROLL_THRESHOLD) setIsHidden(true)
    else if (isHidden && newScrollTop - lastScrollTop < -SCROLL_THRESHOLD) setIsHidden(false)

    // Header change style on top of page
    if (!isTop && newScrollTop < SCROLL_TOP_PX) setIsTop(true)
    else if (isTop && newScrollTop >= SCROLL_TOP_PX) setIsTop(false)

    lastScrollTop = newScrollTop
    handleDynamicClass()
  }

  const handleMobileMenuToggle = (): void => {
    setIsOpen(!isOpen)
    handleDynamicClass()
  }

  useEffect(() => {
    if (window && document) {
      if (!isHandleScrollMounted) {
        isHandleScrollMounted = true
        window.addEventListener('scroll', handleScroll)
        handleScroll()
      }

      return () => {
        isHandleScrollMounted = false
        window.removeEventListener('scroll', handleScroll)
      }
    }
  })

  return (<div className={ 'header' + scrollHeaderClass } css={[css`{
    position: ${ props.position || 'fixed' };
    top: 0;
    left: 0;
    width: 100%;
    z-index: 90;
    transform: 0;
    overflow: hidden;

    background-color: ${ COLOR_PRIMARY_BG };
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.16);

    transition: all .5s;
    &.${ HEADER_HIDE_CLASS } {
      transform: translateY(-100%);
    }
    ${ MEDIA_DESKTOP } {
      min-width: 1200px;
      height: 78px;
    }
    ${ MEDIA_MOBILE } {
      height: 19.44vw;
      &.${HEADER_MOBILE_MENU_OPEN} {
        height: 72vw;
      }
    }
  }`, props.additionalCss]}>
    <div className='header__limiter' css={css`{
      position: relative;
      height: 100%;

      display: flex;
      justify-content: space-between;
      align-items: center;
      ${ MEDIA_DESKTOP } {
        width: 1200px;
        margin: 0 auto;
      }
      ${MEDIA_MOBILE} {
        flex-direction: column;
      }
    }`}>
      <div className='header__group1' css={css`{
        flex: 0 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        ${MEDIA_MOBILE} {
          width: 100%;
        }
      }`}>
        <Link href='/'>
          <a css={css`{
            flex: 0 0 auto;
          }`}>
            <div className='header__logo' css={css`{
              background-image: url("/common/logo.png");
              background-position: center;
              background-repeat: no-repeat;
              background-size: contain;

              cursor: pointer;
              user-select: none;
              ${ MEDIA_DESKTOP } {
                width: 200px;
                height: 50px;
              }
              ${ MEDIA_MOBILE } {
                width: 27.78vw;
                height: 8.89vw;
                margin: 5.56vw;
              }
            }`}></div>
          </a>
        </Link>
        <div className='header__hamburger' onClick={ handleMobileMenuToggle } css={css`{
          flex: 0 0 auto;

          background-image: url("/common/hamburger.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          ${ MEDIA_DESKTOP } {
            display: none;
          }
          ${ MEDIA_MOBILE } {
            width: 5.56vw;
            height: 5.56vw;
            margin: 5.56vw;
          }
        }`}></div>
      </div>

      <div className='header__link' css={css`{
        flex: 1 0 auto;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        ${ MEDIA_MOBILE } {
          display: none;
          .${HEADER_MOBILE_MENU_OPEN} & {
            position: relative;
            width: 100%;
            padding-top: 3vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            &::before{
              content: "";
              position: absolute;
              top: 0;
              left: 50%;
              width: 90%;
              transform: translateX(-50%);
              border-top: solid 1px ${ COLOR_TEXT_LIGHT };
            }
          }
        }
        & .header__link__items {
          position: relative;
          margin-right: 2.5em;
          color: ${ COLOR_TEXT };
          font-family: ${ FONT_B };
          line-height: 1;
          text-decoration: none;
          ${MEDIA_DESKTOP} {
            font-size: 18px;
          }
          ${MEDIA_MOBILE} {
            margin: 3vw 6vw;
            font-size: 5vw;
          }
          &::before {
            content: '';
            position: absolute;
            top: 120%;
            left: 50%;
            width: 0%;
            height: .1em;
            transform: translateX(-50%);

            background-color: ${ COLOR_TEXT };

            transition: width .2s ease;
          }
          &:hover {
            &::before {
              width: 100%;
            }
          }
        }
      }`}>
        <Link href='/service'>
          <a className='header__link__items header__link__service'>서비스</a>
        </Link>
        <Link href='/column'>
          <a className='header__link__items header__link__column'>칼럼</a>
        </Link>
        <Link href='/#contact'>
          <a className='header__link__items2 header__link__contact' css={css`{
            padding: .5em 1em;

            background-color: transparent;
            border: solid 1px ${COLOR_TEXT};
            border-radius: 3px;

            color: ${COLOR_TEXT};
            font-family: ${FONT_B};
            font-size: 18px;
            line-height: 1;
            cursor: pointer;
            user-select: none;
            transition: background-color .2s ease, color .2s ease;
            ${MEDIA_MOBILE} {
              margin: 3vw 6vw;
              align-self: stretch;
              font-size: 5vw;
              text-align: center;
            }
            &:hover {
              background-color: ${COLOR_TEXT};

              color: ${COLOR_TEXT_INVERT};
            }
          }`}>상담문의</a>
        </Link>
      </div>
    </div>
  </div>)
}

export default PlainHeader
