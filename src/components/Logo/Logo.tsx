import Icon from 'src/components/Icon/Icon'
import logo from 'src/assets/images/logo.svg'
import clsx from 'clsx'

import s from './Logo.module.scss'
import { LogoComponentType } from 'src/components/Logo/Logo.types'

const Logo: LogoComponentType = ({ className }) => {
  return <Icon icon={logo} className={clsx(s.logo, className)} />
}

export default Logo
