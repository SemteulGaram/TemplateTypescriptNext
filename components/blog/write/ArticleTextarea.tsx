import React from 'react'

import ArticleBase from './ArticleBase'
import ToolBar from './ToolBar'

type ArticleTextareaProps = {
  onChange: (markdownContent: string) => void
}

type ArticleTextareaState = {}


class ArticleTextarea extends React.Component<ArticleTextareaProps, ArticleTextareaState> {
  _lastContentCache: string

  constructor (props: Readonly<ArticleTextareaProps>) {
    super(props)
    this.state = {}
    this._lastContentCache = ''
  }

  // Browser only
  doDownload (): void {
    const eleA = document.createElement('a')
    eleA.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this._lastContentCache))
    eleA.setAttribute('download', Date.now() + '.md')
    eleA.style.display = 'none'
    document.body.appendChild(eleA)
    eleA.click()
    document.body.removeChild(eleA)
  }

  onChange (event: React.ChangeEvent<HTMLTextAreaElement>): void {
    this._lastContentCache = event.target.value
    this.props.onChange(event.target.value)
  }

  render (): React.ReactElement {
    return (<ArticleBase overwriteStyle={{ display: 'flex', flexDirection: 'column' }}>
      <ToolBar downloadTrigger={ this.doDownload.bind(this) }/>
      <textarea className='article_textarea article_body' onChange={ event => { this.onChange(event) } }></textarea>
      <style jsx>{`
        .article_textarea {
          flex-grow: 1;
        }
      `}</style>
    </ArticleBase>)
  }
}
// TODO: load article

export default ArticleTextarea