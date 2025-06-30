import { MovieCardType } from 'src/pages/BrowsePage/MovieCard/MovieCard.types'
import s from './MovieCard.module.scss'

const MovieCard: MovieCardType = ({ card }) => {
  return (
    <li
      className={s.card}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w300/${card.backdrop_path}")`,
      }}
    >
      {/* <img src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`} alt="" /> */}
    </li>
  )
}

export default MovieCard
