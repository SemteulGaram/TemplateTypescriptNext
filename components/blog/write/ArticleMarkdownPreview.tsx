import React from 'react'

import ArticleBase from './ArticleBase'

type ArticleMarkdownPreviewProps = {
  methodReciever: (doContentChange: (htmlContent: React.ReactElement) => void) => void
}

type ArticleMarkdownPreviewState = {
  content: React.ReactElement|null // TODO: convert to section array
}

class ArticleMarkdownPreview extends React.Component<ArticleMarkdownPreviewProps, ArticleMarkdownPreviewState> {
  constructor (props: Readonly<ArticleMarkdownPreviewProps>) {
    super(props)
    this.state = {
      content: null
    }
  }

  // Browser only code
  componentDidMount (): void {
    this.props.methodReciever(this.doContentChange.bind(this))
  }

  doContentChange (content: React.ReactElement): void {
    this.setState({
      content
    })
  }

  render (): React.ReactElement {
    return (
      <ArticleBase overwriteStyle={{}}>
        <div className='article_markdown_preview article_body'>{ this.state.content }</div>
      </ArticleBase>
    )
  }
}

export default ArticleMarkdownPreview
