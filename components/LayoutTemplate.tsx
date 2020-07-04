import Head from 'next/head'
import { COLOR_PRIMARY } from '../src/var'

type Props = {}

const Template: React.FunctionComponent<Props> = (props) => (
  <div className='layout1'>
    <Head>
      <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <link rel='icon' href='/favicon.png' />
      <meta name="theme-color" content={ COLOR_PRIMARY } />
      <link href="https://materialdesignicons.com/cdn/2.0.46/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
    </Head>
    { props.children }
    <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    @font-face {
      font-family: 'SpoqaHanSansBold';
      src: url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Bold.woff2') format('woff2'),
          url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Bold.ttf') format('truetype'),
          url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Bold.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'SpoqaHanSansRegular';
      src: url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Regular.woff2') format('woff2'),
          url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Regular.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'SpoqaHanSansLight';
      src: url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Light.woff2') format('woff2'),
          url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Light.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'SpoqaHanSansThin';
      src: url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Thin.woff2') format('woff2'),
          url('/fonts/SpoqaHanSans/Spoqa_Han_Sans_Thin.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareL';
      src: url('/fonts/NanumSquare/NanumSquareL2.otf') format('opentype'),
          url('/fonts/NanumSquare/NanumSquareL2.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareR';
      src: url('/fonts/NanumSquare/NanumSquareR2.otf') format('opentype'),
          url('/fonts/NanumSquare/NanumSquareR2.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareB';
      src: url('/fonts/NanumSquare/NanumSquareB2.otf') format('opentype'),
          url('/fonts/NanumSquare/NanumSquareB2.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareEB';
      src: url('/fonts/NanumSquare/NanumSquareEB2.otf') format('opentype'),
          url('/fonts/NanumSquare/NanumSquareEB2.eot') format('embedded-opentype');
    }

    .__font_eb {
      font-family: 'SpoqaHanSansBold', sans-serif;
    }

    .__font_b {
      font-family: 'SpoqaHanSansBold', sans-serif;
    }

    .__font_r {
      font-family: 'SpoqaHanSansRegular', sans-serif;
    }

    .__font_l {
      font-family: 'SpoqaHanSansLight', sans-serif;
    }

    .__font_el {
      font-family: 'SpoqaHanSansThin', sans-serif;
    }

    * {
      box-sizing: border-box;
    }

    html {
      font-family: 'SpoqaHanSansRegular', sans-serif;
    }

    body {
      margin: 0;
    }

    @media screen and (min-width: 800px) {
      .__desktop {
        display: inline-block;
      }

      .__mobile {
        display: none;
      }
    }

    @media screen and (max-width: 799px) {
      .__desktop {
        display: none;
      }

      .__mobile {
        display: inline-block;
      }
    }
    `}</style>
  </div>
)

export default Template
