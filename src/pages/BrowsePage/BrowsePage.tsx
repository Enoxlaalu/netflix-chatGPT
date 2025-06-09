import { getNowPlayingMovies } from 'src/api/movies'
import Header from 'src/components/Header/Header'
import useCallApi from 'src/hooks/useCallApi'
import MainMovie from 'src/pages/BrowsePage/MainContainer/MainContainer'
import { NowPlayingMoviesData } from 'src/types/movies'

const BrowsePage = () => {
  const { results: movies } = useCallApi<NowPlayingMoviesData>(getNowPlayingMovies)

  return (
    <div>
      <Header />
      <main>{movies && <MainMovie movie={movies[0]} />}</main>
    </div>
  )
}

export default BrowsePage
