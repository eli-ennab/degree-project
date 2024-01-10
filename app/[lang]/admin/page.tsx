import { PiLockSimple } from 'react-icons/pi'
import { container, link, lock } from './styles.css'
import Link from 'next/link'

export default function Admin() {
  return (
    <>
      <Link href={'/'} className={link}>
        go back
      </Link>
      <div className={container}>
        <PiLockSimple className={lock} />
      </div>
    </>
  )
}
