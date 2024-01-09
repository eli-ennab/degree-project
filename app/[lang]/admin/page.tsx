import { PiLockSimple } from 'react-icons/pi'
import { container, lock } from './styles.css'

export default function Admin() {
  return (
    <div className={container}>
      <PiLockSimple className={lock} />
    </div>
  )
}
