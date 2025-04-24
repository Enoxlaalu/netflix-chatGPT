export default (isSignUp: boolean) => {
  const fullName = {
    id: 'fullName',
    label: 'Full Name',
  }

  const email = {
    id: 'email',
    label: 'Email',
  }

  const password = {
    id: 'password',
    label: 'Password',
  }

  return isSignUp ? [fullName, email, password] : [email, password]
}
