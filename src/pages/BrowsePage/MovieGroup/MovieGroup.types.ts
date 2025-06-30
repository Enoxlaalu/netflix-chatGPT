import { FC } from 'react'
import { Movie } from 'src/types/movies'

export type MovieGroupType = FC<{
  title: string
  list: Movie[]
}>
