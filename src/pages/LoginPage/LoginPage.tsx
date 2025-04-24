import Icon from 'src/components/Icon/Icon'
import logo from 'src/assets/images/logo.svg'
import s from './LoginPage.module.scss'
import LoginForm from 'src/pages/LoginPage/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <main className={s.page}>
      <div className="container">
        <Icon icon={logo} className={s.logo} />
        <section className={s.formContainer}>
          <LoginForm />
        </section>
      </div>
    </main>
  )
}

export default LoginPage
