const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
}

export default async (path: string, options?: { [key: string]: string }) => {
  const res = await fetch(path, {
    ...API_OPTIONS,
    ...options,
  })

  if (!res.ok) throw new Error(`HTTP error: ${res.status}`)

  return await res.json()
}
