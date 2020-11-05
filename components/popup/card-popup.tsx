/** @jsxImportSource @emotion/core */
// Card Popup v1.0.1
import { jsx, css, keyframes, Interpolation } from '@emotion/core'
import { COLOR_BG, COLOR_TEXT, CSS_BOX_SHADOW, FONT_B, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'

type Props = {
  title: string
  content: React.ReactElement
  closeCallback: () => void
  additionalCss?: Interpolation
}

const keyframesBgFadeIn = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: rgba(0,0,0,0.9);
  }
`

const keyframesCardIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const CardPopup: React.FunctionComponent<Props> = props => {
  return (<div className='cp_fullscreen' css={[css`{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 90;

    display: flex;
    justify-content: center;
  }`, props.additionalCss]}>
    <div className='cp__bg' onClick={() => {
      props.closeCallback()
    }} css={css`{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background-color: rgba(0,0,0,0.9);

      animation: ${keyframesBgFadeIn} .2s;
    }`}></div>
    <div className='cp_overflow_handle' css={css`{
      height: 100%;
    }`}></div>
    <div className='cp' css={css`{
      position: relative;

      display: flex;
      flex-direction: column;

      background-color: ${COLOR_BG};
      border-radius: .5em;
      ${CSS_BOX_SHADOW}

      color: ${COLOR_TEXT};

      animation: ${keyframesCardIn} .2s;
      ${MEDIA_DESKTOP} {
        width: 700px;
        padding: 20px 40px;
        margin: auto 0;
      }
      ${MEDIA_MOBILE} {
        width: 90vw;
        padding: 5vw 10vw;
        margin: auto 0;
      }
    }`}>
      <div className='cp__header' css={css`{
        margin-top: 1rem;

        display: flex;
        justify-content: space-between;
      }`}>
        <h1 css={css`{
          margin: .5rem 0;

          flex: 1 0 auto;

          font-family: ${FONT_B};
          line-height: 1.2;
          font-size: 2rem;
          font-weight: normal;
          ${MEDIA_MOBILE} {
            font-size: 1.5em;
          }
        }`}>{ props.title }</h1>
        <button onClick={() => {
          props.closeCallback()
        }} css={css`{
          all: unset;

          position: relative;
          width: 3rem;
          height: 3rem;
          z-index: 95;

          flex: 0 0 auto;

          display: flex;
          justify-content: center;
          align-items: center;

          line-height: 1;
          font-size: 2rem;
          cursor: pointer;
          user-select: none;
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 94;

            background-color: transparent;
            border-radius: 100% 100%;

            transition: background-color .2s;
          }
          &:hover::before {
            content: '';
            background-color: rgba(0,0,0,.25);
          }
        }`}><span className='mdi mdi-close' css={css`{ font-size: 2rem; }`}></span></button>
      </div>
      <div className='cp__content' css={css`{
        overflow: auto;

        flex: 1 0 auto;

        display: flex;
        flex-direction: column;

        margin: 1em 0 1em 0;
        line-height: 1.6;
        word-break: keep-all;
        ${MEDIA_DESKTOP} {
          font-size: 15px;
        }
        ${MEDIA_MOBILE} {
          font-size: 3vw;
        }
      }`}>
        { props.content }
      </div>
    </div>
  </div>)
}

export default CardPopup
