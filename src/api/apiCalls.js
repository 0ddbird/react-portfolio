import { serverUrl } from './apiConfig'

async function postMessage (email, message) {
  const fetchParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      message
    })
  }

  const response = await fetch(serverUrl, fetchParams)
  return response
}

export { postMessage }
