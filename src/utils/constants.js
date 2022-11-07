const prod = {
  API_URL: 'https://klava-server.herokuapp.com/api/v1'
}

const dev = {
  API_URL: 'http:localhost:3000/api/v1'
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;