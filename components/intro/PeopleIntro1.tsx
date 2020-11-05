/** @jsxImportSource @emotion/core */
import { jsx, css } from '@emotion/core'

import { MEDIA_DESKTOP, MEDIA_MOBILE, COLOR_TEXT, COLOR_PRIMARY, COLOR_BG } from '../../src/var'
import Link from 'next/link'

type Props = {}

const PeopleIntro1: React.FunctionComponent<Props> = props => (<div className='pi1' css={css`{
  position: relative;
  width: 100%;
  ${MEDIA_DESKTOP} {
    min-width: 1200px;
    padding: 64px 0;
  }
  ${MEDIA_MOBILE} {
    padding: 10vw 0;
  }
}`}>
  <div className='pi1__limiter' css={css`{
    position: relative;
    height: 100%;

    display: flex;
    ${MEDIA_DESKTOP} {
      width: 1200px;
      margin: 0 auto;

      align-items: center;
    }
    ${MEDIA_MOBILE} {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }`}>
    <div className='pi1__img' css={css`{
      flex: 0 0 auto;

      background-image: url("/img/example1.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      ${ MEDIA_DESKTOP } {
        width: 45%;
        height: 900px;
        margin: 0 5% 0 0;
      }
      ${MEDIA_MOBILE} {
        width: 100vw;
        height: 120vw;
        margin: 0;
      }
    }`}>
    </div>
    <div className='pi1__content_wrapper' css={css`{
      flex: 1 0 auto;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${COLOR_TEXT};
      ${ MEDIA_DESKTOP } {
        height: 100%;
      }
    }`}>
      <div className='pi1__content' css={css`{
        display: flex;
        flex-direction: column;
        justify-content: center;
        ${ MEDIA_DESKTOP } {
          height: 100%;
        }
        ${MEDIA_MOBILE} {
          width: 86vw;
        }
      }`}>
        <div className='pi1__content__title' css={css`{
          ${ MEDIA_DESKTOP } {
            font-size: 30px;
            line-height: 1.7;
          }
          ${MEDIA_MOBILE} {
            margin-top: 8vw;

            font-size: 6.5vw;
            line-height: 1;
          }
        }`}>
          PeopleIntro1&nbsp;<br className='__desktop' />
          추가 공간
        </div>
        <div className='pi1__content__desc' css={css`{
          ${ MEDIA_DESKTOP } {
            margin-top: 30px;

            font-size: 20px;
            line-height: 1.79;
          }
          ${MEDIA_MOBILE} {
            margin-top: 6vw;

            font-size: 3.33vw;
            line-height: 1.92;
          }
        }`}>
          소개문이 들어가는 장소0<br/>
          소개문이 들어가는 장소1<br/>
          소개문이 들어가는 장소2<br/>
          소개문이 들어가는 장소3<br/>
          소개문이 들어가는 장소4<br/>
          소개문이 들어가는 장소5<br/>
          소개문이 들어가는 장소6<br/>
          소개문이 들어가는 장소7<br/>
          소개문이 들어가는 장소8<br/>
          소개문이 들어가는 장소9
        </div>
        <Link href='#'>
          <a css={css`{
            text-decoration: none;

            cursor: pointer;
            user-select: none;
          }`}>
            <div className='pi1__content__btn' css={css`{
              display: flex;
              justify-content: center;
              align-items: center;

              background-color: ${ COLOR_PRIMARY };

              color: ${ COLOR_BG };
              line-height: 1;
              ${ MEDIA_DESKTOP } {
                width: 100%;
                height: 50px;
                margin-top: 48px;

                border-radius: 25px;

                font-size: 20px;
              }
              ${MEDIA_MOBILE} {
                width: 100%;
                height: 10vw;
                margin-top: 8vw;

                border-radius: 5vw;

                font-size: 4vw;
              }
            }`}>
              추가링크
            </div>
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>)

export default PeopleIntro1
