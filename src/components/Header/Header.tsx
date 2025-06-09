import Logo from 'src/components/Logo/Logo'

import s from './Header.module.scss'
import Button from 'src/components/Button/Button'
import { signOut } from 'firebase/auth'
import { auth } from 'src/utils/firebase'

const Header = () => {
  const handleSignOut = () => signOut(auth)

  const links = [
    {
      id: 'home',
      name: 'Home',
      link: '/',
    },
    {
      id: 'shows',
      name: 'TV Shows',
      link: '/shows',
    },
    {
      id: 'movies',
      name: 'Movies',
      link: '/movies',
    },
  ]

  return (
    <header className={s.header}>
      <Logo />
      <nav className={s.nav}>
        {links.map(({ id, name, link }) => {
          return (
            <li key={id}>
              <a href={link}>{name}</a>
            </li>
          )
        })}
      </nav>
      <Button text="Sign out" onClick={handleSignOut} />
    </header>
  )
}

export default Header
