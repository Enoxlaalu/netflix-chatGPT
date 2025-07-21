import clsx from 'clsx'
import s from './Input.module.scss'
import { InputType } from 'src/components/Input/Input.types'
import { ChangeEvent } from 'react'

const Input: InputType = ({ id, label, value, onChange, error }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, id)
  }

  return (
    <div className={s.inputContainer}>
      <input type="text" id={id} value={value} onChange={handleChange} className={s.input} />
      <label htmlFor={id} className={clsx(s.label, value && s.hasValue)}>
        {label}
      </label>
      {error && <span className={s.error}>{error}</span>}
    </div>
  )
}

export default Input
