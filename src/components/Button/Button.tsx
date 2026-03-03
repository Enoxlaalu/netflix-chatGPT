import { ButtonType } from 'src/components/Button/Button.types'

import s from './Button.module.scss'

const Button: ButtonType = ({ text, type, onClick, disabled }) => {
  return (
    <button className={s.button} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
