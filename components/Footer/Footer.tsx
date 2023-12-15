import Link from 'next/link'
import { container } from './styles.css'

const Footer = () => (
  <footer className={container}>
    <Link href={'/admin'}>admin</Link>
  </footer>
)

export default Footer
