import { OPEN_ROUTER_KEY } from 'src/constants/constants'

export const makeGptSearch = async (query: string) => {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPEN_ROUTER_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-r1:free',
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
    }),
  })

  return await res.json()
}
