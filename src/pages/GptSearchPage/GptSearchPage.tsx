import { useState } from 'react'
import Button from 'src/components/Button/Button'
import Header from 'src/components/Header/Header'
import Input from 'src/components/Input/Input'

import s from './GptSearchPage.module.scss'
import { makeGptSearch } from 'src/api/openRouter'
import Spinner from 'src/components/Spinner/Spinner'
import { getMovieByName } from 'src/api/movies'

const GptSearchPage = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [movieList, setMovieList] = useState<string[]>([])
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

      const movieList: string = res.choices[0].message.content
      const movieArray = movieList.split(', ')

      const movieRequestsList = movieArray.map((name) => getMovieByName(name))
      const movieListTmdb = await Promise.all(movieRequestsList)

      const movieBackdrops: string[] = movieListTmdb
        .map((m) => m.results?.[0]?.backdrop_path)
        .filter(Boolean)

      setMovieList(movieBackdrops)
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
          <Spinner />
        ) : movieList.length > 0 ? (
          <ul className={s.list}>
            {movieList.map((path) => {
              return (
                <li
                  className={s.card}
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w300${path}")`,
                  }}
                />
              )
            })}
          </ul>
        ) : null}
      </section>
    </div>
  )
}

export default GptSearchPage
