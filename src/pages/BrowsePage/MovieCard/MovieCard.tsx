import { MovieCardType } from 'src/pages/BrowsePage/MovieCard/MovieCard.types'
import s from './MovieCard.module.scss'

const MovieCard: MovieCardType = ({ card }) => {
  const hasPoster = Boolean(card.backdrop_path)

  return (
    <li
      className={`${s.card} ${!hasPoster ? s.skeleton : ''}`}
      style={{
        backgroundImage: hasPoster ? `url("https://image.tmdb.org/t/p/w300${card.backdrop_path}")` : 'none',
      }}
    >
      <span className={s.title}>{card.title}</span>
    </li>
  )
}

export default MovieCard
