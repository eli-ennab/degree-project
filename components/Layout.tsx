import Navigation from './Navigation'
import Footer from './Footer'
 
const Layout = ({ children }: any) => (
  <div>
    <Navigation/>
      {children}
    <Footer />
  </div>
)
 
export default Layout