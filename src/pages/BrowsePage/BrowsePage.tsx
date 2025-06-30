import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from 'src/api/movies'
import Header from 'src/components/Header/Header'
import useCallApi from 'src/hooks/useCallApi'
import MainContainer from 'src/pages/BrowsePage/MainContainer/MainContainer'
import MovieGroup from 'src/pages/BrowsePage/MovieGroup/MovieGroup'
import { MoviesData } from 'src/types/movies'

import s from './BrowsePage.module.scss'

const BrowsePage = () => {
  const { results: nowPlaying } = useCallApi<MoviesData>(getNowPlayingMovies)
  const { results: popular } = useCallApi<MoviesData>(getPopularMovies)
  const { results: topRated } = useCallApi<MoviesData>(getTopRatedMovies)
  const { results: upcoming } = useCallApi<MoviesData>(getUpcomingMovies)

  const groups = [
    {
      id: 'nowPlaying',
      title: 'Now Playing',
      list: nowPlaying,
    },
    {
      id: 'popular',
      title: 'Popular',
      list: popular,
    },
    {
      id: 'topRated',
      title: 'Top Rated',
      list: topRated,
    },
    {
      id: 'upcoming',
      title: 'Upcoming',
      list: upcoming,
    },
  ]

  return (
    <div className={s.page}>
      <Header />
      <main>
        {nowPlaying && <MainContainer movie={nowPlaying[0]} />}
        <section className={s.movieListSection}>
          {groups.map((g) => {
            return <MovieGroup key={g.id} {...g} />
          })}
        </section>
      </main>
    </div>
  )
}

export default BrowsePage
