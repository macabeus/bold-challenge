import { serverBaseUrl } from '../constants.json'

const getWines = async () => {
  const response = await fetch(`${serverBaseUrl}/wines`)
  const responseJson = await response.json()

  return responseJson
}

export { getWines }
