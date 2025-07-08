export default defineEventHandler(async (event) => {
  const { slug } = event.context.params

  const res = await fetch(`https://directus.i9sellz.com.br/items/noticias?filter[slug][_eq]=${slug}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    return { error: 'Erro ao buscar notícia por slug' }
  }

  const json = await res.json()

  // Retorna apenas a primeira notícia encontrada
  return json.data[0]
})
