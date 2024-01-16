import React from 'react'
import { TfiClose } from 'react-icons/tfi'
import { cancelButton, confirmButton, close, wrapper } from './styles.css'

interface IProps {
  action: string | null
  children: React.ReactNode
  onCancel: () => void
  onConfirmDelete: () => void
  onConfirmToggle: () => void
  show: boolean
}

const ConfirmationBox: React.FC<IProps> = ({
  action,
  children,
  onCancel,
  onConfirmDelete,
  onConfirmToggle,
  show,
}) => {
  return show ? (
    <div className={wrapper}>
      <TfiClose className={close} onClick={onCancel} />
      <h2>{children}</h2>

      <div>
        {action && (
          <button
            id="text"
            onClick={action === 'delete' ? onConfirmDelete : onConfirmToggle}
            className={confirmButton}
          >
            yes, {action}
          </button>
        )}
        <button id="text" onClick={onCancel} className={cancelButton}>
          Cancel
        </button>
      </div>
    </div>
  ) : null
}

export default ConfirmationBox
