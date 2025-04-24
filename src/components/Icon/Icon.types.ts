import type { FC, SVGProps, SyntheticEvent } from 'react'

export type IconType = FC<{
  icon: FC<SVGProps<SVGElement>>
  className?: string
  onClick?: (e: SyntheticEvent) => void
}>
