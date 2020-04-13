import Head from 'next/head'

import Header from './Header'

type Template1Props = {}

const Template1: React.FunctionComponent<Template1Props> = (props) => (
  <div className='template1'>
    <Head>
      <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta property='og:url' content='https://example.com' />
      <meta property='og:title' content='제목 예시' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='/thumbnail.png' />
      <meta property='og:description' content='소개문 예제' />
      <title>제목 예시</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    {/*<Header/>*/}
    { props.children }
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      @font-face {
        font-family: 'NanumSquareL';
        src: url('fonts/NanumSquareL2.otf') format('opentype'),
            url('fonts/NanumSquareL2.eot') format('embedded-opentype');
      }

      @font-face {
        font-family: 'NanumSquareR';
        src: url('fonts/NanumSquareR2.otf') format('opentype'),
            url('fonts/NanumSquareR2.eot') format('embedded-opentype');
      }

      @font-face {
        font-family: 'NanumSquareB';
        src: url('fonts/NanumSquareB2.otf') format('opentype'),
            url('fonts/NanumSquareB2.eot') format('embedded-opentype');
      }

      @font-face {
        font-family: 'NanumSquareEB';
        src: url('fonts/NanumSquareEB2.otf') format('opentype'),
            url('fonts/NanumSquareEB2.eot') format('embedded-opentype');
      }

      .__font_nanumsquare_l {
        font-family: 'NanumSquareL', sans-serif;
      }

      .__font_nanumsquare_r {
        font-family: 'NanumSquareR', sans-serif;
      }

      .__font_nanumsquare_b {
        font-family: 'NanumSquareE', sans-serif;
      }

      .__font_nanumsquare_eb {
        font-family: 'NanumSquareEB', sans-serif;
      }
    `}</style>
  </div>
)

export default Template1
