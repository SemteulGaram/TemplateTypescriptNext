/** @jsxImportSource @emotion/core */
import { css } from '@emotion/core'

import { COLOR_BG, COLOR_PRIMARY, COLOR_TEXT, COLOR_WHITE, CSS_A_UNSET, isMobi, MEDIA_DESKTOP, MEDIA_MOBILE } from '../../src/var'

type Props = {
  detailLinkText: string
  detailLink: string
  detailResourceLink: string
  closeCallback: () => void
}

const BannerDetail: React.FunctionComponent<Props> = (props) => {
  return <div className='banner_detail' css={css`{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 900050;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0,.8);
  }`}>
    <div className='bd__main' css={css`{
      position: relative;

      display: flex;
      flex-direction: column;
      ${MEDIA_DESKTOP} {
        width: 600px;
        height: 100%;
      }
      ${MEDIA_MOBILE} {
        width: 90vw;
        height: 100%;
      }
    }`}>
      <div className='bd__image' css={css`{
        overflow: hidden auto;

        flex: 1 1 auto;
      }`}>
        <img
            width={isMobi() ? '90vw' : '600px'}
            src={props.detailResourceLink}
        />
      </div>
      <div className={'bd__detail'
          + ((props.detailLink && props.detailLinkText) ? ' bd__detail--active' : '')} css={css`{
        flex: 0 0 auto;

        display: none;
        justify-content: center;
        align-items: center;

        background-color: ${COLOR_WHITE};
        ${MEDIA_DESKTOP} {
          height: 120px;
        }
        ${MEDIA_MOBILE} {
          height: 33vw;
        }
        &.bd__detail--active {
          display: flex;
        }
      }`}>
        <a css={CSS_A_UNSET} href={props.detailLink} target='_blank'>
          <div className='db__detail_btn' css={css`{
            padding: .75em 1.5em;

            border: solid 1px ${COLOR_PRIMARY};
            border-radius: 100em;

            color: ${COLOR_PRIMARY};
            font-size: 18px;
          }`}>
            {props.detailLinkText}
          </div>
        </a>
      </div>
      <div className='db__close_btn'
          onClick={props.closeCallback}
          css={css`{
        position: absolute;
        right: 4em;
        top: 4em;

        background-color: rgba(0,0,0,.25);
        border-radius: 100%;

        cursor: pointer;
        user-select: none;
        ${MEDIA_DESKTOP} {
          width: 4em;
          height: 4em;
        }
        ${MEDIA_MOBILE} {
          width: 2.5em;
          height: 2.5em;
        }
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 10%;
          width: 80%;
          height: 2px;
          transform: translateY(-1px) rotateZ(-45deg);

          background-color: ${COLOR_WHITE};
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 10%;
          width: 80%;
          height: 2px;
          transform: translateY(-1px) rotateZ(45deg);

          background-color: ${COLOR_WHITE};
        }
      }`}></div>
    </div>
  </div>
}

export default BannerDetail
