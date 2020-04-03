import * as React from 'react'
import { NextPageContext } from 'next'
import fetch from 'isomorphic-unfetch'

import Layout from '../../components/MyLayout'

type ShowProps = {
  show: {
    name: string;
    summary: string;
    image?: {
      medium: string
    }
  }
}

class Show extends React.Component<ShowProps> {
  static getInitialProps = async (context: NextPageContext) => {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
  }

  render() {
    const show = this.props.show
    return (
      <Layout>
        <h1>{ show.name }</h1>
        <p>{ show.summary.replace(/<[/]?[pb]/g, '')}</p>
        { show.image ? <img src={ show.image.medium }/> : null }
      </Layout>
    )
  }
}

export default Show
