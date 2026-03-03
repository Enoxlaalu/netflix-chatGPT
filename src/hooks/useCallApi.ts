import { useState, useEffect } from 'react'

interface UseCallApiResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export default <T>(apiFn: () => Promise<T>): UseCallApiResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiFn()
        setData(res)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
