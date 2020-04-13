import React from 'react'
import Showdown from 'showdown'
import HtmlToReact from 'html-to-react'

import ArticleTextarea from './ArticleTextarea'
import ArticleMarkdownPreview from './ArticleMarkdownPreview'
import ToolBar from './ToolBar'

type ArticleLayoutProps = {}
type ArticleLayoutState = {}

class ArticleLayout extends React.Component<ArticleLayoutProps, ArticleLayoutState> {
  _doMarkdownChange: ((htmlContent: React.ReactElement) => void)|null

  constructor (props: Readonly<ArticleLayoutProps>) {
    super(props)
    this._doMarkdownChange = null
  }

  onArticleChange (markdownContent: string) {
    const converter = new Showdown.Converter()
    const parser = new HtmlToReact.Parser()
    
    const html: React.ReactElement = parser.parse(converter.makeHtml(markdownContent))
    if (this._doMarkdownChange) {
      this._doMarkdownChange(html)
    } else {
      // TODO: delay
    }
  }

  render (): React.ReactElement {
    return (<div className='article_layout'>
      <div className='article_area'>
        <ArticleTextarea onChange={ markdownContnet => { this.onArticleChange(markdownContnet) } }/>
        <ArticleMarkdownPreview methodReciever={ doContentChange => { this._doMarkdownChange = doContentChange } } />
      </div>
      <style jsx>{`
        .article_area {
          position: relative;
          width: 100%;
          height: 900px;
          
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }
      `}</style>
      <style jsx global>{`
        .article_area > * {
          width: 50%;
        }
      `}</style>
    </div>)
  }
}

export default ArticleLayout


