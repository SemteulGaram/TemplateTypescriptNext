/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { NextPage } from 'next'
import Head from 'next/head'

import { MEDIA_DESKTOP, MEDIA_MOBILE, COLOR_TEXT_INVERT, COLOR_TEXT, FONT_B, COLOR_BG } from '../src/var'
import PlainHeader from '../components/header/plain-header'
import LayoutPlain from '../components/LayoutPlain'
import HorizontalLinkList1 from '../components/list/HorizontalLinkList1'
import ImageSlider1 from '../components/slider/ImageSlider1'
import PeopleIntro1 from '../components/intro/PeopleIntro1'
import Contact1 from '../components/contact/Contact1'
import Contact2 from '../components/contact/Contact2'
import VerticalStickyImageNContentList from '../components/list/VerticalStickyImageNContentList'
import GoToContact from '../components/form/GoToContact'
import ReviewSlider from '../components/slider/review-slider'
import ReviewImageSlider from '../components/slider/review-image-slider'
import ZigzagGallery from '../components/gallery/zigzag-gallery'
import SimpleContentImage from '../components/layout/simple-content-image'
import ShowcaseHorizontal3 from '../components/showcase/showcase-horizontal3'

type Props = {}

const Index: NextPage<Props> = props => {
  return (<LayoutPlain>
    <Head>
      <title>컴포넌트 예시 페이지</title>
    </Head>
    <PlainHeader position='fixed' additionalCss={css`{
      &.header--top {
        ${MEDIA_DESKTOP} {
          height: 165px;

          background-color: transparent;
          box-shadow: none;
        }
        ${MEDIA_MOBILE} {
          background-color: transparent;
          box-shadow: none;
        }
        .header__logo {
          ${MEDIA_DESKTOP} {
            height: 135px;
            margin-top: 30px;
            background-image: url("/common/logo-full.png");
          }
        }
        .header__link__items {
          ${MEDIA_DESKTOP} {
            color: ${COLOR_TEXT_INVERT};
            &::before {
              background-color: ${COLOR_TEXT_INVERT};
            }
          }
        }
        .header__link__items2 {
          border: solid 1px ${COLOR_TEXT_INVERT};

          color: ${COLOR_TEXT_INVERT};
          &:hover {
            background-color: ${COLOR_TEXT_INVERT};
            color: ${COLOR_TEXT};
          }
        }
      }
    }`} />
    <HorizontalLinkList1 />
    <ImageSlider1 imgSrcs={[
      '/img/example1.jpg',
      '/img/example2.jpg',
      '/img/example3.jpg',
      '/img/example4.jpg'
    ]}/>
    <PeopleIntro1 />
    <Contact1 />
    <Contact2 />
    <VerticalStickyImageNContentList
        list={[
          {
            content: (<div className='vsicl__items'>
              vsicl__items1
            </div>),
            imageSrc: '/img/example1.jpg',
            imageSrcM: '/img/example1.jpg'
          },
          {
            content: (<div className='vsicl__items'>
              vsicl__items2
            </div>),
            imageSrc: '/img/example2.jpg',
            imageSrcM: '/img/example2.jpg'
          },
          {
            content: (<div className='vsicl__items'>
              vsicl__items3
            </div>),
            imageSrc: '/img/example3.jpg',
            imageSrcM: '/img/example3.jpg'
          },
          {
            content: (<div className='vsicl__items'>
              vsicl__items4
            </div>),
            imageSrc: '/img/example4.jpg',
            imageSrcM: '/img/example4.jpg'
          }
        ]}
        additionalCss={css`{
          & .vsicl__items {
            font-family: ${FONT_B};
          }
        }`}
        desktopImageRight={true} />
      <GoToContact />
      <ReviewSlider list={[
        {
          imgSrc: '/img/example1.jpg',
          author: 'author',
          content: 'content'
        },
        {
          imgSrc: '/img/example2.jpg',
          author: 'author2',
          content: 'content2'
        },
        {
          imgSrc: '/img/example3.jpg',
          author: 'author3',
          content: 'content3'
        }
      ]} />
      <ReviewImageSlider items={[
        {
          imgSrc: '/img/example1.jpg',
          imgSrcM: '/img/example1.jpg',
          title: 'title1'
        },
        {
          imgSrc: '/img/example2.jpg',
          imgSrcM: '/img/example2.jpg',
          title: 'title2'
        },
        {
          imgSrc: '/img/example3.jpg',
          imgSrcM: '/img/example3.jpg',
          title: 'title3'
        },
        {
          imgSrc: '/img/example4.jpg',
          imgSrcM: '/img/example4.jpg',
          title: 'title4'
        },
        {
          imgSrc: '/img/example1.jpg',
          imgSrcM: '/img/example1.jpg',
          title: 'title5'
        }
      ]} />
      <ZigzagGallery items={[
        {
          imgSrc: '/img/example1.jpg',
          title: 'title1'
        },
        {
          imgSrc: '/img/example2.jpg',
          title: 'title2'
        },
        {
          imgSrc: '/img/example3.jpg',
          title: 'title3'
        },
        {
          imgSrc: '/img/example4.jpg',
          title: 'title4'
        },
        {
          imgSrc: '/img/example1.jpg',
          title: 'title5'
        }
      ]} />
      <SimpleContentImage
          bgColor={COLOR_BG}
          color={COLOR_TEXT}
          componentMargin={'180px 0'}
          componentMarginM={'20vw 0'}
          fontSize={'16px'}
          fontSizeM={'4.5vw'}
          content={
            <p css={css`{
              height: 5em;
            }`}>layout/simple-content-image.tsx</p>
          }
          imgSrc={'/img/example1.jpg'}
          imgSrcM={'/img/example1.jpg'}
          reverse={false}
          reverseM={false}
      />
      <ShowcaseHorizontal3
          bgColor={COLOR_BG}
          color={COLOR_TEXT}
          componentMargin={'180px 0'}
          componentMarginM={'20vw 0'}
          fontSize={'16px'}
          fontSizeM={'4.5vw'}

          title={
            <span>showcase/showcase-horizontal.tsx</span>
          }
          items={[
            {
              imgSrc: '/img/example1.jpg',
              imgSrcM: '/img/example1.jpg',
              title: 'title1',
              views: 0,
              date: new Date(),
              link: '#'
            },
            {
              imgSrc: '/img/example1.jpg',
              imgSrcM: '/img/example1.jpg',
              title: 'title2',
              views: 0,
              date: new Date(),
              link: '#'
            },
            {
              imgSrc: '/img/example1.jpg',
              imgSrcM: '/img/example1.jpg',
              title: 'title3',
              views: 0,
              date: new Date(),
              link: '#'
            }
          ]}
      />
  </LayoutPlain>)
}

export default Index
