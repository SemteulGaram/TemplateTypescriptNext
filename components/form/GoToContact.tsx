/** @jsxImportSource @emotion/core */
import { jsx, css } from '@emotion/core'

import { MEDIA_DESKTOP, FONT_EB, FONT_B, MEDIA_MOBILE, COLOR_BG_INVERT, COLOR_TEXT_INVERT, COLOR_PRIMARY, COLOR_PRIMARY_BG } from '../../src/var'

type Props = {}

const GoToContact: React.FunctionComponent<Props> = (props) => (<div className='gtc' css={css`{
  position: relative;
  width: 100%;

  background-color: ${ COLOR_BG_INVERT };

  color: ${ COLOR_TEXT_INVERT };
  ${ MEDIA_DESKTOP } {
    height: 500px;
  }
  ${MEDIA_MOBILE} {
    height: 58vw;
  }
}`}>
  <div className='gtc__limiter' css={css`{
    ${ MEDIA_DESKTOP } {
      position: relative;
      width: 1200px;
      margin: 0 auto;
    }
  }`}>
    <div className='gtc__title' css={css`{
      position: absolute;
      left: 50%;
      width: 100%;
      transform: translateX(-50%);
      text-align: center;
      line-height: 1.7;
      ${MEDIA_DESKTOP} {
        top: 150px;
        font-size: 38px;
      }
      ${MEDIA_MOBILE} {
        top: 17.5vw;
        font-size: 4.5vw;

      }
    }`}>
      GoToContact.tsx<br/>
      <span css={css`{
        font-family: ${ FONT_EB };
      }`}>(Extra line)</span>
    </div>
    <a className='gtc__button_wrapper' href='/#contact' css={css`{

    }`}>
      <div className='gtc__button' css={css`{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: ${ COLOR_PRIMARY };

        color: ${ COLOR_PRIMARY_BG };
        font-family: ${ FONT_B };
        ${ MEDIA_DESKTOP } {
          top: 320px;
          width: 290px;
          height: 60px;
          border-radius: 30px;
          font-size: 20px;
          line-height: 1;
        }
        ${ MEDIA_MOBILE } {
          top: 37vw;
          width: 33.5vw;
          height: 10vw;
          border-radius: 5vw;
          font-size: 3.5vw;
          line-height: 1;
        }
      }`}>
        지금 상담 신청
      </div>
    </a>
  </div>
</div>)

export default GoToContact
