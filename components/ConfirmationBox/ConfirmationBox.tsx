import React from 'react'
import Button from '../Button/Button'
import { wrapper } from './styles.css'

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
    <div>
      <h2>{children}</h2>

      <div className={wrapper}>
        {action === 'delete' && (
          <Button id="text" onClick={onConfirmDelete}>
            Confirm delete
          </Button>
        )}

        {action === 'toggle' && (
          <Button id="text" onClick={onConfirmToggle}>
            Confirm toggle
          </Button>
        )}
        <Button id="text" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  ) : null
}

export default ConfirmationBox
