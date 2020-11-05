/** @jsxImportSource @emotion/core */
import { jsx, css } from '@emotion/core'
import { MEDIA_DESKTOP, FONT_B, COLOR_TEXT, MEDIA_MOBILE, FONT_R, COLOR_PRIMARY, CSS_BACKGROUND_IMAGE_COVER } from '../../src/var'

export type ZigzagImageList = {
  imgSrc: string
  title: string,
  content: string,
  link: string
}

type Props = {
  title: string,
  bgImgSrc: string,
  list: ZigzagImageList[]
}

const ZigzagImage: React.FunctionComponent<Props> = (props) => (<div className='zigzag_image' css={css`{
  position: relative;

  user-select: none;
}`}>
  <div className='zi__limiter' css={css`{
    ${MEDIA_DESKTOP} {
      position: relative;
      width: 1200px;
      margin: 0 auto;
    }
  }`}>
    <div className='zi__title' css={css`{
      width: 100%;

      color: ${COLOR_TEXT};
      font-family: ${FONT_B};
      line-height: 1;
      text-align: center;
      ${MEDIA_DESKTOP} {
        margin: 214px 0 0 0;

        font-size: 50px;
      }
      ${MEDIA_MOBILE} {
        margin: 30vw 0 0 0;

        font-size: 6.4vw;
      }
    }`}>{ props.title }</div>
    <div className='zi__list' css={css`{
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: stretch;
      ${MEDIA_DESKTOP} {
        margin: 0 0 254px 0;
      }
      ${MEDIA_MOBILE} {
        margin: 0 0 14vw 0;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -50;

        background-image: url("${ props.bgImgSrc }");
        ${CSS_BACKGROUND_IMAGE_COVER}
      }
    }`}>{
      props.list.map((v, i) => {
        return (<div key={i} className='zi__group' css={css`{
          width: 100%;

          display: flex;
          ${MEDIA_DESKTOP} {
            height: 460px;
            margin: 106px 0 0 0;

            flex-direction: ${ ((i % 2) === 0) ? 'row' : 'row-reverse' };
          }
          ${MEDIA_MOBILE} {
            margin: 13vw 0 0 0;

            flex-direction: column;
          }
        }`}>
          <div className='zi__group__image'
              style={{ backgroundImage: `url("${ v.imgSrc }")` }}
              css={css`{
            flex: 0 0 auto;

            ${CSS_BACKGROUND_IMAGE_COVER};
            ${MEDIA_DESKTOP} {
              width: 560px;
            }
            ${MEDIA_MOBILE} {
              width: 100%;
              height: 80vw;
            }
          }`}></div>
          <div className='zi__group__desc' css={css`{
            flex: 1 0 auto;

            display: flex;
            flex-direction: column;

            text-align: ${ ((i % 2) === 0) ? 'left' : 'right' };
            ${MEDIA_DESKTOP} {
              margin: ${ ((i % 2) === 0) ? '46px 0 46px 90px' : '46px 90px 46px 0' };
            }
            ${MEDIA_MOBILE} {
              margin: 6.6vw 5.5vw 0 5.5vw;
            }
          }`}>
            <div className='zi__group__title' css={css`{
              padding: .6em 0 .8em 0;

              flex: 0 0 auto;

              color: ${COLOR_TEXT};
              font-family: ${FONT_B};
              line-height: 1;
              ${MEDIA_DESKTOP} {
                font-size: 35px;
              }
              ${MEDIA_MOBILE} {
                font-size: 5.5vw;
              }
            }`}>{ v.title }</div>
            <pre className='zi__group__content' css={css`{
              position: relative;
              margin: 0;

              flex: 1 0 auto;

              color: ${COLOR_TEXT};
              font-family: ${FONT_R};
              line-height: 2;
              ${MEDIA_DESKTOP} {
                padding: 1em 0;

                font-size: 25px;
              }
              ${MEDIA_MOBILE} {
                padding: 1em 0;

                font-size: 3.9vw;
              }
              &::before {
                content: "";
                position: absolute;
                top: 0;
                ${ ((i % 2) === 0) ? 'left: 0' : 'right: 0' };

                border-top: solid 1px ${COLOR_PRIMARY};
                ${MEDIA_DESKTOP} {
                  width: 100px;
                }
                ${MEDIA_MOBILE} {
                  width: 15vw;
                }
              }
            }`}>{ v.content }</pre>
            <div className='zi__group__link' css={css`{
              flex: 0 0 auto;
            }`}>
              <a href={ v.link } css={css`{
                color: ${COLOR_PRIMARY};
                font-family: ${FONT_B};
                line-height: 1;
                text-decoration: none;
                cursor: pointer;
                ${MEDIA_DESKTOP} {
                  font-size: 20px;
                }
                ${MEDIA_MOBILE} {
                  font-size: 3vw;
                }
              }`}>더 알아보기 &gt;</a>
            </div>
          </div>
        </div>)
      })
    }</div>
  </div>
</div>)

export default ZigzagImage
