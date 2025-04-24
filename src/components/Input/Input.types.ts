import { FC } from 'react'

export type InputType = FC<{
  id: string
  label: string
  value: string
  onChange: (id: string, v: string) => void
  error?: string
}>
