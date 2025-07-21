import Logo from 'src/components/Logo/Logo'

import s from './Header.module.scss'
import Button from 'src/components/Button/Button'
import { signOut } from 'firebase/auth'
import { auth } from 'src/utils/firebase'
import { Link, Navigate } from 'react-router'

const Header = () => {
  const handleSignOut = () => signOut(auth)

  const links = [
    {
      id: 'home',
      name: 'Home',
      link: '/browse',
    },
    {
      id: 'gptSearch',
      name: 'GPT Search',
      link: '/gptSearch',
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
              <Link to={link}>{name}</Link>
            </li>
          )
        })}
      </nav>
      <Button text="Sign out" onClick={handleSignOut} />
    </header>
  )
}

export default Header
