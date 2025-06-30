import { FC } from 'react'
import { Movie } from 'src/types/movies'

export type MovieListType = FC<{
  list: Movie[]
}>
