const { API_HOST, A, E, UB } = window.CONFIG

export async function getData(section, category) {
  try {
    const url = `${API_HOST}/${section}/?a=${A}&e=${E}&ub=${UB}${
      category ? `&c=${category}` : ''
    }`

    const res = await fetch(url)
    const result = await res.json()
    return result
  } catch (error) {
    console.log(error)
  }
}
