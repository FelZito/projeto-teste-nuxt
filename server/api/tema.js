export default defineEventHandler(async (event) => {
  const res = await fetch('https://directus.i9sellz.com.br/items/tema/', {
    headers: {
    }
  });

  if (!res.ok) {
    return { error: 'Erro ao buscar tema do Directus' };
  }

  const data = await res.json();
  return data.data;
});                                         