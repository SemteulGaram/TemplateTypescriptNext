/** @jsx jsx */
// Basic Footer v1.0.1
import { jsx, css, Interpolation } from '@emotion/core'

import { COLOR_FOOTER_BG, COLOR_FOOTER_TEXT, CSS_BACKGROUND_IMAGE_CONTAIN, FONT_B, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'

type Props = {
  logoImgSrc: string
  logoImgSrcM?: string
  title: string
  contactInfo?: React.ReactElement
  companyName: string
  copyrightYear: string
  additionalCss?: Interpolation
}
const BasicFooter: React.FunctionComponent<Props> = props => (<div className='basic_footer' css={[css`{
  position: relative;

  background-color: ${COLOR_FOOTER_BG};

  color: ${COLOR_FOOTER_TEXT};
  ${MEDIA_DESKTOP} {
    padding: 30px 0;
  }
  ${MEDIA_MOBILE} {
    padding: 4vw 0 2vw 0;
  }
}`, props.additionalCss]}>
  <div className='bf__limiter' css={css`{
    ${MEDIA_DESKTOP} {
      position: relative;
      width: 1200px;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
    }
    ${MEDIA_MOBILE} {
      position: relative;
      width: 90%;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }`}>
    <div className='bf__group1' css={css`{
      ${MEDIA_DESKTOP} {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
    }`}>
      <div className='bf__title' css={css`{
        font-family: ${FONT_B};
        ${MEDIA_DESKTOP} {
          flex: 1 0 auto;

          font-size: 27px;
          text-align: right;
        }
        ${MEDIA_MOBILE} {
          width: 100%;

          flex: 0 0 auto;

          font-size: 4vw;
          text-align: center;
        }
      }`}>
        “ {props.title} ”
      </div>
      <div className='footer__group2' css={css`
        ${MEDIA_DESKTOP} {
          display: flex;
          flex-direction: column;
        }
      `}>
        <div className='footer__icon' css={css`{
          ${CSS_BACKGROUND_IMAGE_CONTAIN}
          filter: contrast(0) brightness(150%);
          ${MEDIA_DESKTOP} {
            width: 200px;
            height: 50px;
            margin: 20px 0 0 0;

            background-image: url('${props.logoImgSrc}');
          }
          ${MEDIA_MOBILE} {
            width: 25vw;
            height: 6vw;
            margin-top: 14vw;

            flex: 0 0 auto;

            background-image: url('${props.logoImgSrcM || props.logoImgSrc}');
          }
        }`}></div>
        <div className='footer__content' css={css`{
          ${MEDIA_DESKTOP} {
            margin: 30px 0 0 0;
            font-size: 16px;
            line-height: 1.75;
          }
          ${MEDIA_MOBILE} {
            padding-top: 3vw;
            flex: 0 0 auto;

            font-size: 3vw;
            line-height: 1.9;
          }
        }`}>{
          props.contactInfo || null
        }</div>
      </div>
    </div>
    <div className='footer__hr' css={css`{
      flex: 0 0 auto;
    }`}><hr css={css`{
      border: solid 1px #E3E3E3;
      ${MEDIA_DESKTOP} {
        margin: 20px 0 5px 0;
      }
      ${MEDIA_MOBILE} {
        margin: 4vw 0 2vw 0;
      }
    }`}/></div>
    <div className='bf__copyright' css={css`{
      width: 100%;
      flex: 0 0 auto;

      color: #C0C0C0;
      text-align: right;
      ${MEDIA_DESKTOP} {
        font-size: 12px;
      }
      ${MEDIA_MOBILE} {
        font-size: 2.5vw;
      }
    }`}>Copyright ©{props.copyrightYear} {props.companyName}. All rights reserved.</div>
  </div>
</div>)

export default BasicFooter
