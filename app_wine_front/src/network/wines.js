import { serverBaseUrl } from '../constants.json'

const getWines = async () => {
  try {
    const response = await fetch(`${serverBaseUrl}/wines`)
    const responseJson = await response.json()

    return ['ok', responseJson]
  } catch (e) {
    return ['error', e]
  }
}

const postWine = async (newWine) => {
  try {
    const response = await fetch(
      `${serverBaseUrl}/wines`,
      {
        body: JSON.stringify(newWine),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    )
    const responseJson = await response.json()

    return ['ok', responseJson]
  } catch (e) {
    return ['error']
  }
}

export { getWines, postWine }
