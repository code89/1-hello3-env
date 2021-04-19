// domain/.netlify/functions/1-hello
// exports
// const person = { name: 'john' }

const API_KEY = process.env.API_KEY

exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: API_KEY
  }
}