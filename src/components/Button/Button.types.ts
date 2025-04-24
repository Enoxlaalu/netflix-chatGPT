import { FC } from 'react'

export type ButtonType = FC<{
  text: string
  type?: HTMLButtonElement['type']
  onClick?: () => void
}>
