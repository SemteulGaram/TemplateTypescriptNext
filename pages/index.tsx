import { NextPage } from 'next'
import Head from 'next/head'
import LayoutPlain from '../components/LayoutPlain'
import HorizontalLinkList1 from '../components/list/HorizontalLinkList1'
import ImageSlider1 from '../components/slider/ImageSlider1'

type Props = {}

const Index: NextPage<Props> = props => {
  return (<LayoutPlain>
    <Head>
      <title>컴포넌트 예시 페이지</title>
    </Head>
    <HorizontalLinkList1 />
    <ImageSlider1 imgSrcs={[
      '/img/example1.jpg',
      '/img/example2.jpg',
      '/img/example3.jpg',
      '/img/example4.jpg'
    ]}/>
  </LayoutPlain>)
}

export default Index
