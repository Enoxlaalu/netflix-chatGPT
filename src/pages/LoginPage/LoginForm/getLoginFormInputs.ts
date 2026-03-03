const getLoginFormInputs = (isSignUp: boolean) => {
  const fullName = {
    id: 'fullName',
    label: 'Full Name',
    type: 'text',
  }

  const email = {
    id: 'email',
    label: 'Email',
    type: 'email',
  }

  const password = {
    id: 'password',
    label: 'Password',
    type: 'password',
  }

  return isSignUp ? [fullName, email, password] : [email, password]
}

export default getLoginFormInputs
