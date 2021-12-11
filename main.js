const apiEndpoint = 'https://justinsgithub-portfolio.vercel.app/api/hello'

async function logRequest (thisUrl) {
  fetch(thisUrl)
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
