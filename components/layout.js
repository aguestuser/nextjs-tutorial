import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = ({children}) => (
  <div>
    <Header/>
    {children}
  </div>
)
      
export default Layout
