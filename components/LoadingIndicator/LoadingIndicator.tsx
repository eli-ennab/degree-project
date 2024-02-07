import { loader, text } from './styles.css'

export default function LoadingIndicator() {
  return (
    <div className={loader} dir={'auto'}>
      <span className={text}>loading...</span>
    </div>
  )
}
