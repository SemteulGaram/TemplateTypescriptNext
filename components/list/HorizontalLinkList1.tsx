/** @jsxImportSource @emotion/core */
// HorizontalLinkList v1.0.0
// Warning: This component must use once each page for querying element issue
import { jsx, css } from '@emotion/core'
import { MEDIA_DESKTOP, MEDIA_MOBILE, FONT_B, isMobi, COLOR_TEXT, COLOR_PRIMARY } from '../../src/var'

type Card1Props = {
  imageSrc: string
  subtitle: string
  title: string
  link: string
}
const Card1: React.FunctionComponent<Card1Props> = props => (<a href={props.link}
    target="_blank" css={css`{
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
}`}>
  <div className='card1' css={css`{
    flex: 0 0 auto;

    display: flex;
    flex-direction: column;
    ${MEDIA_DESKTOP} {
      width: 358px;
      height: 293px;
      margin: 0 10px;
    }
    ${MEDIA_MOBILE} {
      width: 47.50vw;
      height: 100%;
      margin: 0 2vw;
    }
  }`}>
    <div className='card1__image' css={css`{
      flex: 0 0 auto;

      background-image: url("${ props.imageSrc }");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      ${ MEDIA_DESKTOP } {
        width: 100%;
        height: 243px;

        border-radius: 5px;
      }
      ${MEDIA_MOBILE} {
        width: 100%;
        height: 32.50vw;

        border-radius: 2vw;
      }
    }`}></div>
    <div className='card1__content' css={css`{
      width: 100%;
      flex: 1 0 auto;
      ${ MEDIA_DESKTOP } {
        padding: 5px;
      }
      ${MEDIA_MOBILE} {
        padding: .5vw;
      }
    }`}>
      <div className='card1__subtitle' css={css`{
        color: ${ COLOR_PRIMARY };
        line-height: 1;
        ${ MEDIA_DESKTOP } {
          margin: 10px 0;

          font-size: 15px;
        }
        ${MEDIA_MOBILE} {
          margin: 1.5vw 0;
          font-size: 2.22vw;
        }
      }`}>{ props.subtitle || '비어 있음' }</div>
      <pre className='card1__title' css={css`{
        margin: 0;

        color: ${ COLOR_TEXT };
        font-family: ${ FONT_B };
        line-height: 1.5;
        white-space: pre-wrap;
        word-break: keep-all;
        ${ MEDIA_DESKTOP } {
          font-size: 24px;
        }
        ${MEDIA_MOBILE} {
          font-size: 2.22vw;
        }
      }`}>{ props.title  || '비어 있음' }</pre>
    </div>
  </div>
</a>)


type Props = {}

const HorizontalLinkList1: React.FunctionComponent<Props> = props => (<div className='hll1' css={css`{
  position: relative;
  width: 100%;
  ${ MEDIA_DESKTOP } {
    height: 850px;
  }
  ${MEDIA_MOBILE} {
    height: 98.61vw;
  }
}`}>
  <div className='hll1__limiter' css={css`{
    position: relative;
    height: 100%;
    ${ MEDIA_DESKTOP } {
      width: 1200px;
      margin: 0 auto;
    }
  }`}>
    <div className='hll1__group1'>
      <h2 className='hll1__title' css={css`{
        position: absolute;
        margin: 0;

        color: ${ COLOR_TEXT };
        ${ MEDIA_DESKTOP } {
          top: 158px;
          left: 0;
          font-size: 37px;
          line-height: 1.33;
        }
        ${MEDIA_MOBILE} {
          top: 14vw;
          left: 6.67vw;
          font-size: 4.72vw;
          line-height: 1.53;
        }
      }`}>
        HorizontalLinkList1<br/>
        <span className='hll1__title__highlight' css={css`{
          font-family: ${ FONT_B };
        }`}>예시 제목 강조</span>
      </h2>
    </div>
  </div>
  <div className='hll1__links' onMouseDown={event => {
    event.preventDefault()
    const element = document.querySelector('.hll1__links') as HTMLElement
    element.dataset.isMouseDown = 'y'
    element.dataset.mouseLastX = ''+event.pageX
    element.dataset.preventTrigger = '0'
  }} onMouseUp={event => {
    const element = document.querySelector('.hll1__links') as HTMLElement
    element.dataset.isMouseDown = 'n'
    const prevent = (Number(element.dataset.preventTrigger) > 20)
    if (prevent) event.preventDefault()
    return prevent
  }} onMouseLeave={event => {
    const element = document.querySelector('.hll1__links') as HTMLElement
    element.dataset.isMouseDown = 'n'
  }} onMouseMove={event => {
    if (isMobi()) return
    const element = document.querySelector('.hll1__links') as HTMLElement
    const newX = event.pageX
    const oldX = element.dataset.mouseLastX
    if (element.dataset.isMouseDown !== 'y' || oldX === undefined) return
    const diff = newX - Number(oldX)
    element.dataset.preventTrigger = ''+(Number(element.dataset.preventTrigger) + Math.abs(diff))

    console.log(diff)
    element.scrollLeft -= diff

    element.dataset.mouseLastX = ''+newX
  }} css={css`{
    position: absolute;
    width: 100%;
    overflow-x: scroll;
    scrollbar-width: none;

    display: flex;

    user-select: none;
    ${MEDIA_DESKTOP} {
      top: 320px;
      left: 0;
      height: 500px;
      padding: 0 calc((100vw - 1200px) / 2);
    }
    ${MEDIA_MOBILE} {
      top: 37.22vw;
      left: 0;
      height: 50vw;
      padding: 0 5vw;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }`}>
    <Card1 imageSrc='/img/example1.jpg' subtitle='예시 부제목'
        title={'예시 제목'} link={'#'} />
    <Card1 imageSrc='/img/example2.jpg' subtitle='예시 부제목'
        title={'예시 제목'} link={'#'} />
    <Card1 imageSrc='/img/example3.jpg' subtitle='예시 부제목'
        title={'예시 제목'} link={'#'} />
    <Card1 imageSrc='/img/example4.jpg' subtitle='예시 부제목'
        title={'예시 제목'} link={'#'} />
  </div>
</div>)

export default HorizontalLinkList1
