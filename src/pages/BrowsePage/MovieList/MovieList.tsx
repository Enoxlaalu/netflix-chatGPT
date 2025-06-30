import MovieCard from 'src/pages/BrowsePage/MovieCard/MovieCard'

import s from './MovieList.module.scss'
import { MovieListType } from 'src/pages/BrowsePage/MovieList/MovieList.types'

const MovieList: MovieListType = ({ list }) => {
  return (
    <ul className={s.list}>
      {list.map((l) => {
        return <MovieCard key={l.id} card={l} />
      })}
    </ul>
  )
}

export default MovieList
