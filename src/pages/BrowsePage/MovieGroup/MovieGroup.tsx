import { MovieGroupType } from 'src/pages/BrowsePage/MovieGroup/MovieGroup.types'
import MovieList from 'src/pages/BrowsePage/MovieList/MovieList'

import s from './MovieGroup.module.scss'

const MovieGroup: MovieGroupType = ({ title, list }) => {
  return (
    <div className={s.group}>
      <h2>{title}</h2>
      {list && <MovieList list={list} />}
    </div>
  )
}

export default MovieGroup
