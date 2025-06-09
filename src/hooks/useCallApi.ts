import { useState, useEffect } from 'react'

export default <T>(apiFn: () => Promise<T>): T | Record<string, never> => {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiFn()

      setData(res)
    }

    fetchData()
  }, [])

  return data || {}
}
