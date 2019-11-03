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

export { getWines }
