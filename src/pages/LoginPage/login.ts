import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth'
import { LoginDataType } from 'src/pages/LoginPage/LoginForm/LoginForm.types'
import { ErrorsType } from 'src/types/types'
import { auth } from 'src/utils/firebase'

export const signUp = (
  email: LoginDataType['email'],
  password: LoginDataType['password']
): Promise<{ user?: User; errorMessage?: string }> => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return { user }
    })
    .catch((error: ErrorsType) => {
      const errorMessage = error.message
      return { errorMessage }
    })
}

export const signIn = (
  email: LoginDataType['email'],
  password: LoginDataType['password']
): Promise<{ user?: User; errorMessage?: string }> => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      return { user }
    })
    .catch((error: ErrorsType) => {
      const errorMessage = error.message
      return { errorMessage }
    })
}
