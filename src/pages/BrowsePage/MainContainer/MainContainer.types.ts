import { FC } from 'react'
import { NowPlayingMovie } from 'src/types/movies'

export type MainContainerType = FC<{
  movie: NowPlayingMovie
}>
