let env = {
    baseUrl: "https://jsonplaceholder.typicode.com/"
}
function http(path, method = 'GET', headers = {}, body = {}) {
    let payload = {
        method: method,
        headers: headers,
        body: JSON.stringify(body)
    }
    if (method === 'GET' || method === 'HEAD') {
        return fetch(env.baseUrl + path)
    }
    return fetch(env.baseUrl + path, payload)
}
export default http