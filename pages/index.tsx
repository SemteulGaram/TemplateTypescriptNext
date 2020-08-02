import { NextPage } from 'next'
import Head from 'next/head'
import LayoutPlain from '../components/LayoutPlain'
import HorizontalLinkList1 from '../components/list/HorizontalLinkList1'

type Props = {}

const Index: NextPage<Props> = props => {
  return (<LayoutPlain>
    <Head>
      <title>컴포넌트 예시 페이지</title>
    </Head>
    <HorizontalLinkList1 />
  </LayoutPlain>)
}

export default Index
