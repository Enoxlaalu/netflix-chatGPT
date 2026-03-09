export const makeGptSearch = async (query: string) => {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPEN_ROUTER_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'stepfun/step-3.5-flash:free',
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
    }),
  })

  if (!res.ok) throw new Error(`OpenRouter error: ${res.status}`)

  return await res.json()
}
