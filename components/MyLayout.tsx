import Header from './Header'

const layoutStyle = {
  margin: 20,
  pading: 20,
  border: '1px solid #DDD'
}

type Props = {}

const Layout: React.FunctionComponent<Props> = (props) => (
  <div style={ layoutStyle }>
    <Header/>
    { props.children }
  </div>
)

export default Layout
