/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { MEDIA_DESKTOP, COLOR_PRIMARY, FONT_B, COLOR_TEXT, FONT_EB, MEDIA_MOBILE } from '../../src/var'

type CardProps = {
  title: string
  content: string
}
const HorizontalIndicatorCard: React.FunctionComponent<CardProps> = (props) => (<div className='horizontal_indicator__card' css={css`{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  color: ${COLOR_TEXT};
  ${MEDIA_MOBILE} {
    /*width: 42vw;*/
    width: 35vw;
    margin: 5vw 2vw;

    flex: 0 0 auto;
  }
}`}>
  <div className='hi__card__title' css={css`{
    line-height: 1;
    ${MEDIA_DESKTOP} {
      font-size: 20px;
    }
    ${MEDIA_MOBILE} {
      font-size: 2.8vw;
    }
  }`}>{ props.title }</div>
  <div className='hi__card__content' css={css`{
    margin-top: .4em;
    font-family: ${FONT_B};
    line-height: 1;
    ${MEDIA_DESKTOP} {
      font-size: 75px;
    }
    ${MEDIA_MOBILE} {
      font-size: 11.7vw;
    }
  }`}>{ props.content }</div>
</div>)

type Props = {
  title: React.ReactElement
  list: CardProps[]
}

const HorizontalIndicator: React.FunctionComponent<Props> = (props) => (<div className='horizontal_indicator' css={css`{
  position: relative;
  overflow: visible;
  ${MEDIA_DESKTOP} {
    height: 752px;
  }
  ${MEDIA_MOBILE} {
    height: 146vw;
  }
}`}>
  <div className='hi__bg' css={css`{
    position: absolute;
    z-index: -50;

    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    ${MEDIA_DESKTOP} {
      top: 45px;
      right: 0;
      width: 100%;
      height: 1000px;

      background-image: url('/index/s2-s3-bg.png');
    }
    ${MEDIA_MOBILE} {
      top: 12.5vw;
      right: 0;
      width: 100%;
      height: 190vw;

      background-image: url('/index/s2-s3-bg-m.png');
    }
  }`}></div>
  <div className='hi__limiter' css={css`{
    ${MEDIA_DESKTOP} {
      position: relative;
      width: 1200px;
      height: 100%;
      margin: 0 auto;
    }
  }`}>
    <h1 className='hi__title' css={css`{
      margin: 0;

      color: ${COLOR_TEXT};
      font-family: ${FONT_EB};
      font-weight: normal;
      line-height: 1.33;
      ${MEDIA_DESKTOP} {
        padding-top: 140px;

        font-size: 45px;
      }
      ${MEDIA_MOBILE} {
        padding: 19vw 0 0 5vw;
        font-size: 8.33vw;
      }
    }`}>{
      props.title
    }</h1>
    <div className='hi__content' css={css`{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      ${MEDIA_DESKTOP} {
        margin-top: 120px;
      }
      ${MEDIA_MOBILE} {
        width: 85vw;
        margin: 14vw auto 0 auto;

        justify-content: center;
        flex-wrap: wrap;
      }
    }`}>{
      props.list.map((v, i) => {
        return (<HorizontalIndicatorCard key={ i } title={ v.title } content={ v.content } />)
      })
    }</div>
  </div>
</div>)

export default HorizontalIndicator
