/** @jsxImportSource @emotion/core */
// TODO: refactor
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import { MEDIA_DESKTOP, FONT_B, MEDIA_MOBILE, COLOR_BG_INVERT, COLOR_TEXT_INVERT, COLOR_PRIMARY_BG, COLOR_GRAY, COLOR_PRIMARY } from '../../src/var'

const Subscribe1: React.FunctionComponent = () => {
  const [ fEmail, setFEmail ] = useState<string>('')

  return (<div className='sub' id='subscribe' css={css`{
    position: relative;
    width: 100%;

    background-color: ${COLOR_BG_INVERT};

    color: ${COLOR_TEXT_INVERT};
    ${MEDIA_DESKTOP} {
      height: 500px;
    }
    ${MEDIA_MOBILE} {
      height: 92vw;
    }
  }`}>
    <div className='sub__limiter'>
      <h2 className='sub__title' css={css`{
        position: absolute;
        margin: 0;

        font-family: ${FONT_B};
        font-weight: normal;
        line-height: 1.25;
        text-align: center;
        ${MEDIA_DESKTOP} {
          top: 100px;
          width: 100%;

          font-size: 36px;
        }
        ${MEDIA_MOBILE} {
          top: 12vw;
          width: 100%;

          font-size: 5.56vw;
        }
      }`}>
        TODO: TITLE
      </h2>
      <div className='sub__content' css={css`{
        position: absolute;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        ${MEDIA_DESKTOP} {
          top: 200px;
        }
        ${MEDIA_MOBILE} {
          top: 36vw;
        }
      }`}>
        <div className='sub__image' css={css`{
          background-image: url('/blog/thumb.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          ${MEDIA_DESKTOP} {
            width: 70px;
            height: 70px;

            border-radius: 35px;
          }
          ${MEDIA_MOBILE} {
            width: 18vw;
            height: 18vw;

            border-radius: 9vw;
          }
        }`}></div>
        <div className='sub__desc' css={css`{
          line-height: 1.5;
          ${MEDIA_DESKTOP} {
            margin-left: 30px;

            font-size: 20px;
          }
          ${MEDIA_MOBILE} {
            margin-left: 4vw;

            font-size: 3vw;
          }
        }`}>
          TODO: CONTENT
        </div>
      </div>
      <div className='sub__subscribe' css={css`{
        position: absolute;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        ${MEDIA_DESKTOP} {
          top: 320px;
        }
        ${MEDIA_MOBILE} {
          top: 62vw;
        }
      }`}>
        <input type="email" name="email" className="sub__subscribe__input"
            placeholder="내 이메일 입력하기" required value={ fEmail }
            onChange={event => { setFEmail(event.target.value) }} css={css`{
          min-width: 0;

          flex: 0 0 auto;

          display: flex;
          justify-content: center;
          align-items: center;

          background-color: transparent;
          border: none;
          outline: none;

          color: white;
          text-align: left;
          ${MEDIA_DESKTOP} {
            width: 380px;
            height: 60px;
            padding: 0 30px;

            border: solid 2px ${COLOR_GRAY};
            border-radius: 30px;

            font-size: 20px;
          }
          ${MEDIA_MOBILE} {
            width: 62.5vw;
            height: 12.5vw;
            padding: 0 6.25vw;

            border: solid 1px ${COLOR_GRAY};
            border-radius: 6.25vw;

            font-size: 4vw;
          }
        }`}/>
        <input type="submit" value="구독하기" name="subscribe" className="sub__subscribe__submit" onClick={event => {
          event.preventDefault()
          const email = fEmail

          if (!email) {
            alert('연락 받을 수 있는 이메일을 입력해주세요')
            return
          }

          fetch('/api/subscribe-submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email
            })
          }).then(async res => {
            const data = await res.json()
            if (data.err) {
              alert(data.err)
            } else {
              alert('신청이 완료되었습니다')
              setFEmail('')
            }
          }).catch(err => {
            alert(err)
            return
          })
        }} css={css`{
          display: flex;
          justify-content: center;
          align-items: center;

          background-color: ${COLOR_PRIMARY};
          border: none;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.5);
          outline: none;

          color: ${COLOR_PRIMARY_BG};
          font-family: ${FONT_B};
          line-height: 1;
          cursor: pointer;
          user-select: none;
          ${MEDIA_DESKTOP} {
            width: 130px;
            height: 60px;
            margin: 0 0 0 20px;

            border-radius: 30px;

            font-size: 20px;
          }
          ${MEDIA_MOBILE} {
            width: 24vw;
            height: 12.5vw;
            margin: 0 0 0 4vw;

            border-radius: 6.25vw;

            font-size: 4vw;
          }
        }`}/>
      </div>
    </div>
  </div>)
}

export default Subscribe1
