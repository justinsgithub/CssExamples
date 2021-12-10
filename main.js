const test = () => {return "testing"};


async function getRequest(this_url) {
    response = await fetch(this_url)
    return await response.json 
}

//console.log(getRequest(detaEndpoint))
