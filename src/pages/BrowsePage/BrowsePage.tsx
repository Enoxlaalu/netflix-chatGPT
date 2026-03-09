import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from 'src/api/movies'
import Header from 'src/components/Header/Header'
import useCallApi from 'src/hooks/useCallApi'
import MainContainer from 'src/pages/BrowsePage/MainContainer/MainContainer'
import MovieGroup from 'src/pages/BrowsePage/MovieGroup/MovieGroup'
import { MoviesData } from 'src/types/movies'
import Spinner from 'src/components/Spinner/Spinner'

import s from './BrowsePage.module.scss'

const BrowsePage = () => {
  const { data: nowPlayingData, loading, error } = useCallApi<MoviesData>(getNowPlayingMovies)
  const { data: popularData } = useCallApi<MoviesData>(getPopularMovies)
  const { data: topRatedData } = useCallApi<MoviesData>(getTopRatedMovies)
  const { data: upcomingData } = useCallApi<MoviesData>(getUpcomingMovies)

  const nowPlaying = nowPlayingData?.results
  const popular = popularData?.results
  const topRated = topRatedData?.results
  const upcoming = upcomingData?.results

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

  const allLoading = loading || !popularData || !topRatedData || !upcomingData
  if (allLoading)
    return (
      <div className={s.page}>
        <Header />
        <Spinner className={s.spinner} />
      </div>
    )
  if (error)
    return (
      <div className={s.page}>
        <Header />
        <p className={s.error}>{error}</p>
      </div>
    )

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
