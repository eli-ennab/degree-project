import React, { ButtonHTMLAttributes } from 'react'
import { button } from './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  action?: string
}

const Button: React.FC<ButtonProps> = ({ action, ...props }) => (
  <button className={button} {...props} />
)

export default Button
