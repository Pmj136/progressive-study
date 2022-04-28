export const version = "1.0.0"

export function request({url, method = "GET", data}) {
    const xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
        xhr.open(method.toUpperCase(), url, true)
        xhr.onload = function (e) {
            resolve(e.target.response)
        }
        xhr.onerror = reject
        xhr.send(data)
    })
}

export function get(url, data) {
    return request({method: "GET", url, data})
}

export function post(url, data) {
    return request({method: "POST", url, data})
}

export function createEl(...args) {
    const [type, content] = args
    let dom
    if (typeof type === 'string') {
        dom = document.createElement(type)
        dom.innerText = content
    }
    else {
        dom = document.createElement(type.el)
        dom.innerText = type.content
    }
    return dom
}

export default {
    version,
    request,
    get,
    post,
    createEl
}
