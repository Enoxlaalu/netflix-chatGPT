import Logo from 'src/components/Logo/Logo'

import s from './Header.module.scss'
import Button from 'src/components/Button/Button'
import { signOut } from 'firebase/auth'
import { auth } from 'src/utils/firebase'
import { Link, NavLink } from 'react-router'

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
  ]

  return (
    <header className={s.header}>
      <Link to="/browse">
        <Logo />
      </Link>
      <nav className={s.nav}>
        <ul>
          {links.map(({ id, name, link }) => (
            <li key={id}>
              <NavLink to={link} className={({ isActive }) => isActive ? s.active : ''}>{name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Button text="Sign out" onClick={handleSignOut} />
    </header>
  )
}

export default Header
