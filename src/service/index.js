export default async (url, data = {}, method = 'GET',) => {
  const requestConfig = {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    method: method
  }
  if(method === 'POST') {
    Object.defineProperty(requestConfig, 'body', {
      value: JSON.stringify(data)
    })
  }
  try {
    const response = await fetch(url, requestConfig)
    const responseJson = await response.json()
    return responseJson
  } catch (err) {
    // console.log(err)
  }
}