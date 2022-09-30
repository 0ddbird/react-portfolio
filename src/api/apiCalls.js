import { serverUrl } from './apiConfig'

async function postMessage (email, message) {
  const fetchParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      body: message
    })
  }

  const response = await fetch(serverUrl.dev, fetchParams)
  return response
}

export { postMessage }
