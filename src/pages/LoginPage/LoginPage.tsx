import LoginForm from 'src/pages/LoginPage/LoginForm/LoginForm'
import Logo from 'src/components/Logo/Logo'

import s from './LoginPage.module.scss'

const LoginPage = () => {
  return (
    <main className={s.page}>
      <div className="container">
        <Logo className={s.logo} />
        <section className={s.formContainer}>
          <LoginForm />
        </section>
      </div>
    </main>
  )
}

export default LoginPage
