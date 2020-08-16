// pages/_app.js
// For global css files
import 'react-dates/lib/css/_datepicker.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
