// learn more about HTTP functions here: https://arc.codes/primitives/http
exports.handler = async function http (req) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/plain; charset=utf8'
    },
    body: `Someday, this will be a GraphQL endpoint`
  }
}