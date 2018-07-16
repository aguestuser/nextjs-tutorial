import {withRouter} from "next/router"
import Layout from "../components/layout"

const Content = ({router}) => (
  <div>
    <h1>{router.query.title}</h1>
    <p>This is the blog post content</p>
  </div>
)

export default withRouter(props => (
  <Layout>
    <Content {...props}/>
  </Layout>
))
