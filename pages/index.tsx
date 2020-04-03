import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr'

import Layout from '../components/MyLayout'

function fetcher (url: string): any {
  return fetch(url).then(r => r.json())
}

type PostLinkProps = {
  id: string;
}

const PostLink: React.FunctionComponent<PostLinkProps> = props => (
  <li>
    <Link href='/p/[id]' as={ `/p/${ props.id }`}>
      <a>{ props.id }</a>
    </Link>
  </li>
)

type IndexProps = {
  userAgent: string;
  shows: any[];
}

const Index: NextPage<IndexProps> = props => {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/randomQuote${query.author ? '?author=' + query.author : ''}`, fetcher)
  const author = data?.author
  let quote = data?.quote

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <Layout>
      <h1>My Blog - user agent: { props.userAgent }</h1>
      <ul>
        <PostLink id='hello-nextjs' />
        <PostLink id='learn-nextjs' />
        <PostLink id='deploy-nextjs' />
      </ul>
      <hr/>
      <h1>Batman TV Shows</h1>
      <ul>
        { props.shows.map(show => (
          <li key={ show.id }>
            <Link href='/show/[id]' as={ `/show/${ show.id }` }>
              <a>{ show.name }</a>
            </Link>
          </li>
        )) }
      </ul>
      <style jsx>{ `
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      ` }</style>
      <hr/>
      <main className='center'>
        <div className='quote'>{ quote }</div>
        {author && <span className='author'>- { author }</span>}
      </main>
      <style jsx>{ `
        main {
          width: 90%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }

        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      ` }</style>
    </Layout>
  )
}

Index.getInitialProps = async ({ req }): Promise<IndexProps> => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${ data.length }`)

  return {
    userAgent,
    shows: data.map((entry: any) => { return entry.show })
  }
}

export default Index
