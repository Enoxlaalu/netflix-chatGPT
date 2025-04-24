import { FormEvent, useState } from 'react'
import Input from 'src/components/Input/Input'

import s from './LoginForm.module.scss'
import Button from 'src/components/Button/Button'
import { LoginDataType } from 'src/pages/LoginPage/LoginForm/LoginForm.types'
import { ErrorsType } from 'src/types/types'
import { signIn, signUp } from 'src/pages/LoginPage/login'
import getLoginFormInputs from 'src/pages/LoginPage/LoginForm/getLoginFormInputs'
import { User } from 'firebase/auth'
import { useNavigate } from 'react-router'

const LoginForm = () => {
  const [data, setData] = useState<LoginDataType>({} as LoginDataType)
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType)
  const [user, setUser] = useState<User | null>(null)
  const [loginError, setLoginError] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)

  const onChange = (id: string, value: string) => setData({ ...data, [id]: value })

  const validateForm = () => {
    const errors: ErrorsType = {}
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/

    const emailError = (!emailRegex.test(data.email) && 'Wrong email') || (!data.email && 'Required')
    const passwordError = (!passwordRegex.test(data.password) && 'Wrong password') || (!data.password && 'Required')

    if (emailError) errors.email = emailError
    if (passwordError) errors.email = passwordError

    return errors
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const errors = validateForm()

    if (Object.keys(errors).length) {
      setErrors(errors)
      return
    }

    const signFunction = isSignUp ? signUp : signIn

    const { user, errorMessage } = await signFunction(data.email, data.password)

    if (user) setUser(user)
    if (errorMessage) setLoginError(errorMessage)
  }

  const inputs = getLoginFormInputs(isSignUp)

  const changeForm = () => setIsSignUp((v) => !v)

  return (
    <form className={s.form} onSubmit={onSubmit}>
      {inputs.map((el) => {
        return (
          <Input
            key={el.id}
            id={el.id}
            label={el.label}
            value={data[el.id]}
            onChange={onChange}
            error={errors[el.id]}
          />
        )
      })}
      <Button text={`Sign ${isSignUp ? 'Up' : 'In'}`} />
      <p className={s.changeFormText} onClick={changeForm}>
        New to Netflix? <b>Sign up now.</b>
      </p>
      <p className={s.loginError}>{loginError}</p>
    </form>
  )
}

export default LoginForm
