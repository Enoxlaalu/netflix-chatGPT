import { signOut } from 'firebase/auth'
import Button from 'src/components/Button/Button'
import { auth } from 'src/utils/firebase'

const BrowsePage = () => {
  const handleSignOut = () => signOut(auth)

  return (
    <div>
      <Button text="Sign out" onClick={handleSignOut} />
    </div>
  )
}

export default BrowsePage
