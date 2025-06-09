const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDIzYmNhYzhjM2YxMmZhZmRmYTUyMjIxNTliYmE0YSIsIm5iZiI6MTc0OTQ2NzAwOC42MzMsInN1YiI6IjY4NDZiZjgwNWNiMjdmYjgyMjM0MmExNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6tNlZ_UKeNtne5HoKpwNQPNU28sH4f66-aVMJeMzxec',
  },
}

export default async (path: string, options?: { [key: string]: string }) => {
  const res = await fetch(path, {
    ...API_OPTIONS,
    ...options,
  })
  return await res.json()
}
