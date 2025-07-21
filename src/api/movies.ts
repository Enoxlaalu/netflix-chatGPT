import callApi from 'src/utils/callApi'

export const getNowPlayingMovies = () => callApi('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
export const getPopularMovies = () => callApi('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
export const getTopRatedMovies = () => callApi('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1')
export const getUpcomingMovies = () => callApi('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1')

export const getMovieVideos = (movieId: number) =>
  callApi(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`)

export const getMovieByName = (query: string) =>
  callApi(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
