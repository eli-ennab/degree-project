import { Fragment } from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

export default function Layout({ children }: any) {
  return (
    <Fragment>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  )
}
