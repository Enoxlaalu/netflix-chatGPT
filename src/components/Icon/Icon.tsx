import clsx from 'clsx'

import s from './Icon.module.scss'

import { IconType } from 'src/components/Icon/Icon.types'

const Icon: IconType = ({ icon, className = '', onClick }) => {
  const Component = icon

  return <Component className={clsx(s.icon, className)} onClick={onClick} />
}

export default Icon
