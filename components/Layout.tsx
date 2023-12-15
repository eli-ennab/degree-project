import { Fragment } from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

const Layout = ({ children }: any) => (
  <Fragment>
    <Navigation />
    {children}
    <Footer />
  </Fragment>
)

export default Layout
