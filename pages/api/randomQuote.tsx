import { NextApiRequest, NextApiResponse } from 'next'

let _quotes = [
  {
    quote: 'Write tests, not too many, mostly integration',
    author: 'Guillermo Rauch'
  }
]

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { author } = req.query

  if (author) {
    _quotes = _quotes.filter(quote => quote.author.toLowerCase().includes((''+author).toLowerCase()))
  }

  if (!_quotes.length) {
    _quotes = _quotes.filter(quote => quote.author.toLowerCase() === 'unknown')
  }

  const quote = _quotes[Math.floor(Math.random() * _quotes.length)]

  res.status(200).json(quote)
}
