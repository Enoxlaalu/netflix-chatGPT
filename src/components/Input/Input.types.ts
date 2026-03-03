import { FC } from 'react'

export type InputType = FC<{
  id: string
  label: string
  value: string
  onChange: (value: string, id: string) => void
  error?: string
  type?: string
}>
