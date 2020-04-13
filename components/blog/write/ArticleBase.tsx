type ArticleBaseProps = {
  overwriteStyle: any
}

const ArticleBase: React.FunctionComponent<ArticleBaseProps> = (props) => {
  return (
    <div className='article_base' style={ props.overwriteStyle || null }>
      { props.children }
      <style jsx global>{`
        .article_base {
          background-color: white;
          border: solid 1px black;
        }

        .article_base > .article_body {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: auto;

          background-color: transparent;
          border: none;

          font-family: 'NanumSquareR', sans-serif;
          color: black;
          font-size: 16px;
          line-height: 1.6;
          text-align: left;
          word-break: break-word;
        }

        .article_base > textarea.article_body {
          resize: none;
        }
      `}</style>
    </div>
  )
}

export default ArticleBase
