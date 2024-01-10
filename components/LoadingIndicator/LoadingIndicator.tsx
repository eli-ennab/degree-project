import { loader, text } from './styles.css'

export default function LoadingIndicator() {
  return (
    <div className={loader}>
      <span className={text}>loading...</span>
    </div>
  )
}
