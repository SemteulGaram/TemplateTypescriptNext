import Head from 'next/head'
import { COLOR_PRIMARY, FONT_R } from '../src/var'

type Props = {}

const LayoutPlain: React.FunctionComponent<Props> = (props) => (
  <div className='layout_plain'>
    <Head>
      <meta name='viewport'
          content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <link rel='icon' href='/favicon.png' />
      <meta name="theme-color" content={ COLOR_PRIMARY } />
      <link href="/mdi/css/materialdesignicons.min.css" media="all" rel="stylesheet" type="text/css" />
    </Head>
    { props.children }
    <style jsx global>{`
    @font-face {
      font-family: 'NanumSquareL';
      src: url('/fonts/NanumSquare/NanumSquareL.woff2') format('woff2'),
        url('/fonts/NanumSquare/NanumSquareL.ttf') format('truetype'),
        url('/fonts/NanumSquare/NanumSquareL.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareR';
      src: url('/fonts/NanumSquare/NanumSquareR.woff2') format('woff2'),
        url('/fonts/NanumSquare/NanumSquareR.ttf') format('truetype'),
        url('/fonts/NanumSquare/NanumSquareR.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareB';
      src: url('/fonts/NanumSquare/NanumSquareB.woff2') format('woff2'),
        url('/fonts/NanumSquare/NanumSquareB.ttf') format('truetype'),
        url('/fonts/NanumSquare/NanumSquareB.eot') format('embedded-opentype');
    }

    @font-face {
      font-family: 'NanumSquareEB';
      src: url('/fonts/NanumSquare/NanumSquareEB.woff2') format('woff2'),
        url('/fonts/NanumSquare/NanumSquareEB.ttf') format('truetype'),
        url('/fonts/NanumSquare/NanumSquareEB.eot') format('embedded-opentype');
    }

    .__font_eb {
      font-family: 'NanumSquareEB', sans-serif !important;
    }

    .__font_b {
      font-family: 'NanumSquareB', sans-serif !important;
    }

    .__font_r {
      font-family: 'NanumSquareR', sans-serif !important;
    }

    .__font_l {
      font-family: 'NanumSquareL', sans-serif !important;
    }

    .__font_el {
      font-family: 'NanumSquareL', sans-serif !important;
    }

    * {
      box-sizing: border-box;
    }


    html {
      font-family: ${FONT_R};
    }

    body {
      margin: 0;
    }

    @media (min-width: 800px) {
      body {
        min-width: 1280px;
      }

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

export default LayoutPlain
