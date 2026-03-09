import { useState } from 'react'
import Button from 'src/components/Button/Button'
import Header from 'src/components/Header/Header'
import Input from 'src/components/Input/Input'

import s from './GptSearchPage.module.scss'
import { makeGptSearch } from 'src/api/openRouter'
import Spinner from 'src/components/Spinner/Spinner'
import { getMovieByName } from 'src/api/movies'
import { Movie } from 'src/types/movies'

const GptSearchPage = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [error, setError] = useState<string | null>(null)

  const onChange = (v: string) => setValue(v)

  const onClick = async () => {
    if (!value.trim()) return

    setLoading(true)
    setError(null)
    setMovieList([])

    try {
      const res = await makeGptSearch(
        `act as a movie recommendation system and suggest 5 movies for the query: ${value}. Give movies' names comma separated`
      )

      const movieNames: string = res.choices[0].message.content
      const movieArray = movieNames.split(/,\s*/).map((s) => s.trim()).filter(Boolean)

      const movieRequestsList = movieArray.map((name) => getMovieByName(name))
      const movieListTmdb = await Promise.all(movieRequestsList)

      const movies: Movie[] = movieListTmdb
        .map((m) => m.results?.[0])
        .filter(Boolean)

      setMovieList(movies)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={s.page}>
      <Header />
      <section className={s.section}>
        <div className={s.searchBar}>
          <Input id="gptSearch" label="GPT Search" onChange={onChange} value={value} />
          <Button text="Search" onClick={onClick} disabled={loading} />
        </div>
        {error && <p className={s.error}>{error}</p>}
        {loading ? (
          <div className={s.spinnerWrapper}>
            <Spinner />
          </div>
        ) : movieList.length > 0 ? (
          <ul className={s.list}>
            {movieList.map((movie) => (
              <li
                key={movie.id}
                className={s.card}
                style={{
                  backgroundImage: movie.backdrop_path
                    ? `url("https://image.tmdb.org/t/p/w300${movie.backdrop_path}")`
                    : 'none',
                }}
              >
                <div className={s.cardOverlay}>
                  <span className={s.cardTitle}>{movie.title}</span>
                  <span className={s.cardRating}>⭐ {movie.vote_average.toFixed(1)}</span>
                  <p className={s.cardOverview}>{movie.overview}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </div>
  )
}

export default GptSearchPage
