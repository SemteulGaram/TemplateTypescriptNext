import { NextPage } from 'next'

import Template1 from '../../components/LayoutTemplate1'
import ArticleLayout from '../../components/blog/write/ArticleLayout'


type BlogWriteProps = {

}

const BlogWrite: NextPage<BlogWriteProps> = props => {
  return (
    <Template1>
      <div className='blog_write'>
        <ArticleLayout/>
      </div>
    </Template1>
  )
}

export default BlogWrite
