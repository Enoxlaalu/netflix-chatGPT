import { MainContainerType } from 'src/pages/BrowsePage/MainContainer/MainContainer.types'
import s from './MainContainer.module.scss'
import { getMovieVideos } from 'src/api/movies'
import useCallApi from 'src/hooks/useCallApi'
import { MovieVideoData } from 'src/types/movies'

const MainContainer: MainContainerType = ({ movie }) => {
  const { data: videosData } = useCallApi<MovieVideoData>(() => getMovieVideos(movie.id))

  const videos = videosData?.results
  const trailer = videos?.find((v) => v.type === 'Trailer') || videos?.[0]

  if (!videos) {
    return (
      <section
        className={s.mainMovie}
        style={{
          backgroundImage: movie.backdrop_path
            ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
            : 'none',
        }}
      />
    )
  }

  if (!trailer) return null

  return (
    <section className={s.mainMovie}>
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </section>
  )
}

export default MainContainer
