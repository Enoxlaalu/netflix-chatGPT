import callApi from 'src/utils/callApi'

export const getNowPlayingMovies = () => callApi('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')

export const getMovieVideos = (movieId: number) =>
  callApi(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`)
