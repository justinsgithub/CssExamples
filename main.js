const apiEndpoint = 'https://justinsgithub-portfolio.vercel.app'

async function logRequest (thisUrl) {
  const response = await fetch(thisUrl)
  const data = await response.json()
}


logRequest(apiEndpoint)

/*
const test = () => {
  return 'testing'
} */

/*
async function postRequest (thisUrl, thisData) {
  const fetchData = {
    method: 'POST',
    body: thisData,
    headers: new Headers()
  }
  const response = await fetch(thisUrl, fetchData)
  const data = await response.json()
  console.log(data)
} */
