import { NextPage } from 'next'

import Template1 from '../../components/LayoutTemplate1'
import ArticleLayout from '../../components/cke/write/ArticleLayout'


type CKEWriteProps = {

}

const CKEWrite: NextPage<CKEWriteProps> = props => {
  return (
    <Template1>
      <div className='cke_write'>
        <ArticleLayout/>
      </div>
    </Template1>
  )
}

export default CKEWrite
