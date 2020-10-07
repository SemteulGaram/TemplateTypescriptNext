/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { NextPage } from "next"
import { MEDIA_DESKTOP, MEDIA_MOBILE, FONT_EB, FONT_R, COLOR_PRIMARY_HIGHLIGHT as COLOR_PRIMARY, COLOR_PRIMARY_BG, COLOR_TEXT } from '../src/var'
import Link from 'next/link'

type Props = {}
const Error404: NextPage<Props> = props => {
  return (<div className='error404' css={css`{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }`}>
    <div className='content' css={css`{
      position: relative;

      display: flex;
      flex-direction: column;
      align-items: center;

      color: ${COLOR_TEXT};
      text-align: center;
    }`}>
      <div className='image' css={css`{
        background-image: url("/common/logo2.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        ${MEDIA_DESKTOP} {
          width: 150px;
          height: 75px;
        }
        ${MEDIA_MOBILE} {
          width: 150px;
          height: 75px;
        }
      }`}></div>
      <h1 className='title' css={css`{
        margin: .5em 0;
        font-family: ${FONT_EB};
        font-size: 2em;
        font-weight: normal;

        white-space: normal;
        word-break: keep-all;
      }`}>404 페이지를 찾을 수 없음</h1>
      <p className='message' css={css`{
        margin: 0;

        font-family: ${FONT_R};
      }`}>사용자가 요청한 페이지를 찾을 수 없습니다<br/>뒤로가거나 메인페이지로 돌아갈 수 있습니다</p>
      <div className='buttons' css={css`{
        margin: 3em 0 0 0;
        display: flex;
      }`}>
        <Link href='/'>
          <a css={css`{
            min-width: 5em;
            padding: .5em 1em;
            margin: 0 .5em;

            color: ${COLOR_PRIMARY};
            text-decoration: none;
            white-space: normal;
            word-break: keep-all;
            cursor: pointer;
            user-select: none;
          }`}>
            메인페이지로
          </a>
        </Link>
        <a onClick={() => { window.history.back() }}css={css`{
          min-width: 5em;
          padding: .5em 1em;
          margin: 0 .5em;

          background-color: ${COLOR_PRIMARY};
          border-radius: .5em;
          color: ${COLOR_PRIMARY_BG};
          white-space: normal;
          word-break: keep-all;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
        }`}>뒤로가기</a>
      </div>
    </div>
  </div>)
}

export default Error404
